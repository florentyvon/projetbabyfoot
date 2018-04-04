var mongoose = require('mongoose');
var models = require("./../models");
var Regex = require("regex");
var randomstring = require("randomstring");
var Partie = models.Partie;


/** JOIN GAME */
exports.joinGame = function(req, res){

		//On recupère les données du formulaire
		var dataGame = req.body;
		var success = true;
		var result = "";

		//REGEX
		var idgameRegex = /[a-zA-Z0-9]{6}/;
		
		//Test des entrées utilisateurs 
		if(!idgameRegex.test(dataGame.idgame)){
			result+='id de la partie incorrect. \n';
			success = false;
        }
        if(dataGame.equipe !== "r" && dataGame.equipe !== "b"){
            result+='pas d\'équipe choisie \n';
			success = false;
        }
		//Si il y a des erreurs dans les entrées utilisateurs
		if(!success){
            console.log("Erreurs sur entrées utilisateurs");
            console.log(result);
			//On envoie le message d'erreurs
            res.json(result);
		//Sinon
		}else{
            console.log("Verification id Partie");
            //On cherche si l'id de la partie existe dans la bdd 
            Partie.findOne().where("id").equals(dataGame.idgame).exec(function(err,currentGame){
                //Si la partie existe
                if( currentGame !==null ){
                    //Si la partie est en attente de joueur 
                    if(currentGame.etat === 'enAttente'){
                        //On envoie confirmation
                        res.json('OKjoin');
                    }else{
                        //Si la partie est terminée  
                        if(currentGame.etatPartie === 'terminee'){
                            console.log("Erreur id partie");
                            result='Impossible : cette partie est terminée';
                            //On envoie le message d'erreurs
                            res.json(result);
                        }else{
                            //Si la partie est en cours
                            if(currentGame.etatPartie === 'enCours'){
                                console.log("Erreur partie en cours");
                                result='Impossible : cette partie est déjà en cours';
                                //On envoie le message d'erreurs
                                res.json(result);
                            }
                        }
                    }
                }else{
                    console.log("Erreur partie inexistante");
                    result='Impossible : cette partie n\'existe pas';
                    //On envoie le message d'erreurs
                    res.json(result);
                }	
            });
		}
};

/** CREATE SPEED GAME */
exports.createSpeedGame = function(req, res){

    console.log("createSpeedGame function");

    //On recupère les données du formulaire
    var dataGame = req.body;
    var success = true;
    var idgame = randomstring.generate(6);

    /** Verif si id est unique */

    //Creation d'une nouvelle partie dans la base de données
    Partie.create({ id : idgame,
                    etat : "enAttente",
                    nomBabyfoot : dataGame.nomBabyfoot,
                    nbjoueurs : {
                        min : 0,
                        max : 0,
                        b : 0,
                        r : 0,
                       
                    },
                    config : {
                        limiteScore : dataGame.limiteScore,
                    },
                    joueurs : {},
                    score : {
                        "equipeB" : 0,
                        "equipeR" : 0,
                    },
                },
    function(err, user) { 
        if(err){
            res.send(err);
        }
        console.log("Nouvelle partie créée");
        //On envoie l'id en cas de succès
        res.json(idgame);
    });

}


/** DIRECT GAME */
exports.directGame = function(req, res){

    console.log("directGame function");

    //On recupère les données du formulaire
    var dataGame = req.body;


    console.log(dataGame);
    
    var result = "";

    //Verification si la partie existe dans la base de données
    //Et que son etat = enCours
    Partie.findOne().where("id").equals(dataGame.idgame).exec(function(err,currentGame){
        //Si la partie existe

        console.log(currentGame);
        if( currentGame !==null ){
            //Si la partie est en attente de joueur 
            if(currentGame.etat === 'enCours'){
                //On envoie les données de la partie en cours
                res.json(currentGame);  
                console.log('ok envoie info partie a direct game');
            }else{
                //Si la partie est terminée  
                if(currentGame.etatPartie === 'terminee'){
                    console.log("Erreur id partie");
                    result='Impossible : cette partie est terminée';
                    //On envoie le message d'erreurs
                    res.json(result);
                }else{
                    //Si la partie est en cours
                    if(currentGame.etatPartie === 'enAttente'){
                        console.log("Erreur partie en Attete de joueurs");
                        result='Impossible : cette partie est en attente de joueurs';
                        //On envoie le message d'erreurs
                        res.json(result);
                    }
                }
            }
        }else{
            console.log("Erreur partie inexistante");
            result='Impossible : cette partie n\'existe pas';
            //On envoie le message d'erreurs
            res.json(result);
        }	
    });



}
