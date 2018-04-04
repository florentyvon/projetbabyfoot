var mongoose = require('mongoose');
var models = require("./../models");

var Joueur = models.Joueur;
var Stats = models.Statistique;
var booking = models.Reservation;
var maxTime = 30; //Temps maximal de réservation en minutes
var maxDelay = 30 * 24 * 60; //Durée maximale avant réservation (Jours * Heures * Minutes)
var now = new Date();


//RECUPERATION DES DONNEES JOUEUR
exports.getDataPlayer = function (req, res) {

    //On recupère les données du pseudo
    var dataPlayer = req.body.dataPN;
    //On déclare le résultat à renvoyer comme un string
    var result = "";
    //Variable qui reçoit le résultat de la requête
    var currentPlayer;
    //Requête sur la BDD
    Joueur.findOne().where("pseudo").equals(dataPlayer).exec(function (err, currentPlayer) {
        //JSON to String
        result = JSON.stringify(currentPlayer);
        //Envoi du résultat via res
        res.json(result);
    });

};

//RECUPERATION DES STATS JOUEUR
exports.getStatsPlayer = function (req, res) {

    //On recupère les stats à l'aide de l'id
    var dataPlayer = req.body.dataIS;
    //On déclare le résultat à renvoyer comme un string
    var result = "";
    //Variable qui reçoit le résultat de la requête
    var currentPlayer;
    //Requête sur la BDD
    Stats.findOne().where("_id").equals(dataPlayer).exec(function (err, currentPlayer) {
        //JSON to String
        result = JSON.stringify(currentPlayer);
        //Envoi du résultat via res
        res.json(result);
    });
};

//ENREGISTREMENT RESERVATION
exports.bookReservation = function (req, res) {

    console.log("Booking function");

    //On recupère les données du formulaire
    var bookData = req.body;
    var success = true;
    var result = "";
    var result1 = "";
    var DateDeb = bookData.DateDeb;
    var DateFin = bookData.DateFin;
    var DNow = Date.parse(now);

    //Test des entrées utilisateurs
    if (DateDeb > DateFin) {
        success = false;
        result = "Veuillez entrer une date de fin supérieure à l'heure de début";
    }
    if ((DateFin - DateDeb) > (maxTime * 60000)) {
        success = false;
        result = "Veuillez entrer un créneau inférieur à 30 minutes";
    }
    if (DateDeb < DNow) {
        success = false;
        result = "Veuillez entrer une date ou une heure postérieure ou égale à maintenant";
    }
    if (DateDeb - DNow > (maxDelay * 60000)) {
        success = false;
        result = "Il est impossible de réserver un babyfoot plus de 30 jours à l'avance, entrez une date plus proche";
    }

    //Si il y a des erreurs dans les entrées utilisateurs
    if (!success) {
        console.log("Erreurs sur entrées utilisateurs");
        //On envoie le message d'erreurs
        res.json(result);
        //Sinon
    } else {

        //On cherche si un joueur avec la meme adresse mail ou pseudo existe déjà dans la bdd
        booking.findOne({ ID_baby: bookData.ID_baby, $or: [{ DateDeb: { $gte: bookData.DateDeb, $lte: bookData.DateFin } }, { DateFin: { $gte: bookData.DateDeb, $lte: bookData.DateFin } }] }).exec(function (err, Reserv) {

            if (err) return console.error(err);
            //Si le compte n'existe pas déjà 
            if (Reserv === null) {

                //On peut maintenant inscrire la nouvelle réservation
                booking.create({
                    ID_baby: bookData.ID_baby,
                    ID_Joueur: bookData.ID_Joueur,
                    DateDeb: bookData.DateDeb,
                    DateFin: bookData.DateFin,
                },
                    function (err, user) {
                        console.log(err, user)
                        if (err) {
                            res.send(err);
                        }
                        console.log("Nouvelle réservation créée");
                        //On envoie true si le compte est bien créé
                        res.json('OK');
                    });
            } else {
                result = 'Ce créneau est déjà pris de ' + Reserv.DateDeb.getHours() + ':' + Reserv.DateDeb.getMinutes() + ' à ' + Reserv.DateFin.getHours() + ':' + Reserv.DateFin.getMinutes() + ' par ';
                res.json(result);
            }
        });
    }
};

//RECUPERATION DES RESERVATIONS JOUEUR
exports.getMyReservations = function (req, res) {

    var DNow = Date.parse(now);
    //On recupère les stats à l'aide de l'id
    var dataPlayer = req.body.dataID;
    //On déclare le résultat à renvoyer comme un string
    var result = "";
    //Variable qui reçoit le résultat de la requête
    var currentPlayer;
    //Requête sur la BDD
    booking.remove().where("DateFin").lt(DNow).exec(function (err, TRmybookings) {
        console.log("Reservations removed "+TRmybookings.length);
        
    });
    booking.find().where("ID_Joueur").equals(dataPlayer).sort({ DateDeb: 1 }).exec(function (err, mybookings) {
        //JSON to String
        result = JSON.stringify(mybookings);
        //Envoi du résultat via res
        res.json(result);
    });
};
