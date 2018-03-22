var mongoose = require('mongoose');
var models = require("./../models");

var Joueur = models.Joueur;
var Stats = models.Statistique;


//RECUPERATION DES DONNEES JOUEUR
exports.getDataPlayer = function(req, res) {

    //On recupère les données du pseudo
    var dataPlayer = req.body.dataPN;
    //On déclare le résultat à renvoyer comme un string
    var result = "";
    //Variable qui reçoit le résultat de la requête
    var currentPlayer;
    //Requête sur la BDD
    Joueur.findOne().where("pseudo").equals(dataPlayer).exec(function(err, currentPlayer) {
        //JSON to String
        result = JSON.stringify(currentPlayer);
        //Envoi du résultat via res
        res.json(result);
    });

};

//RECUPERATION DES STATS JOUEUR
exports.getStatsPlayer = function(req, res) {

    //On recupère les stats à l'aide de l'id
    var dataPlayer = req.body.dataIS;
    //On déclare le résultat à renvoyer comme un string
    var result = "";
    //Variable qui reçoit le résultat de la requête
    var currentPlayer;
    //Requête sur la BDD
    Stats.findOne().where("_id").equals(dataPlayer).exec(function(err, currentPlayer) {
        //JSON to String
        result = JSON.stringify(currentPlayer);
        //Envoi du résultat via res
        res.json(result);
    });

};