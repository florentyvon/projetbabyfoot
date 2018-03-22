var mongoose = require('mongoose');
var models = require("./../models");

var Joueur = models.Joueur;
var Stats = models.Stats;


//RECUPERATION DES DONNEES JOUEUR
exports.getDataPlayer = function(req, res){

	console.log("GetDataPlayer Function");

	//On recupère les données du pseudo
	var dataPlayer = req.body.dataPN;
	console.log("Dataplayer:", dataPlayer)
	var result = "";
	var currentPlayer;

	console.log("Recherche avec Pseudo");
	Joueur.findOne().where("pseudo").equals(dataPlayer).exec(function(err,currentPlayer){
		result=JSON.stringify(currentPlayer);
		res.json(result);
	});
	
};

exports.getStatsPlayer = function(req, res){

	console.log("GetDataPlayer Function");

	//On recupère les données du pseudo
	var dataIS = req.body.dataIS;
	console.log("Dataplayer:", dataPlayer)
	var result = "";
	var currentPlayer;

	console.log("Recherche avec Pseudo");
	Stats.findOne().where("id").equals(dataIS).exec(function(err,currentPlayer){
		result=JSON.stringify(currentPlayer);
		res.json(result);
	});
	
};