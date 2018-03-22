var mongoose = require('mongoose');
var models = require("./../models");
var Regex = require("regex");
var security = require("./security");
var Joueur = models.Joueur;
var Stats = models.Statistique;

//Function to sign in
exports.signin = function (req, res) {
	stats;
	console.log("Signin Function");

	//On recupère les données du formulaire
	var dataPlayer = req.body;
	var success = true;
	var result = "";
	var currentPlayer;

	//REGEX
	var pseudoRegex = /[a-zA-Z0-9._-]{3,16}/;
	var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;

	//Test des entrées utilisateurs 
	if (!pseudoRegex.test(dataPlayer.pseudo_signin)) {
		result += 'Pseudo. \n';
		success = false;
	}
	if (!passwordRegex.test(dataPlayer.password_signin)) {
		result += 'Le mot de passe entré n\'est pas correct';
		success = false;
	}

	//Si il y a des erreurs dans les entrées utilisateurs
	if (!success) {
		console.log("Erreurs sur entrées utilisateurs");
		//On envoie le message d'erreurs
		res.json(result);

		//Sinon
	} else {
		console.log("Verification Pseudo");
		//On cherche le pseudo dans la base de donnée
		Joueur.findOne().where("pseudo").equals(dataPlayer.pseudo_signin).exec(function (err, currentPlayer) {
			//Si le pseudo existe
			if (currentPlayer !== null) {

				console.log("Verification Password");
				//Verification si le mot de passe entré correspond au mot de passe de la base de données
				if (security.hashPassword(dataPlayer.password_signin, currentPlayer.salt).pswd === currentPlayer.password) {
					console.log("Login OK");
					result = 'OK';
					res.json(result);

				} else {
					console.log("Erreur password");
					result = 'Le mot de passe entré n\'est pas correct';
					//On envoie le message d'erreurs
					res.json(result);
				}
			} else {
				console.log("Erreur pseudo");
				result = 'Cet utilisateur n\'existe pas';
				//On envoie le message d'erreurs
				res.json(result);
			}
		});
	}
};

/** INSCRIPTION */
exports.signup = function (req, res) {

	console.log("Signup function");

	//On recupère les données du formulaire
	var dataPlayer = req.body;
	var success = true;
	var result = "";

	//REGEX
	var pseudoRegex = /[a-zA-Z0-9._-]{3,16}/;
	var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
	var mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-zA-Z]{2,4}$/;

	//Test des entrées utilisateurs 
	if (!pseudoRegex.test(dataPlayer.pseudo_signup)) {
		result += 'Pseudo. \n';
		success = false;
	}
	if (!passwordRegex.test(dataPlayer.password_signup)) {
		result += 'Mot de passe. \n';
		success = false;
	}
	if (dataPlayer.password_signup !== dataPlayer.password_verify_signup) {
		result += 'Confirmation mot de passe. \n';
		success = false;
	}
	if (!mailRegex.test(dataPlayer.mail_signup)) {
		result += 'Adresse mail. \n';
		success = false;
	}

	//Si il y a des erreurs dans les entrées utilisateurs
	if (!success) {
		console.log("Erreurs sur entrées utilisateurs");
		//On envoie le message d'erreurs
		res.json(result);
		//Sinon
	} else {

		//On cherche si un joueur avec la meme adresse mail ou pseudo existe déjà dans la bdd
		Joueur.findOne({ $or: [{ pseudo: dataPlayer.pseudo_signup }, { mail: dataPlayer.mail_signup }] }, function (err, currentPlayer) {

			if (err) return console.error(err);
			//Si le compte n'existe pas déjà 
			if (currentPlayer === null) {

				//Hachage et salage du mot de passe 
				var secureData = security.hashPassword(dataPlayer.password_signup, security.createSalt());
				//Creation du nouveau joueur dans la base de données
				Stats.create({
					nbr_match: 0,
					nbr_but: 0,
					nbr_victoires: 0,
					nbr_defaites: 0,
				},
					function (err, user) {
						console.log(err, user)
						if (err) {
							res.send(err);
						}
						//On envoie true si les stats sont bien créées
						res.json('OK');
					});
				Joueur.create({
					pseudo: dataPlayer.pseudo_signup,
					mail: dataPlayer.mail_signup,
					password: secureData.pswd,
					salt: secureData.salt,
					niv: 1,
				},
					function (err, user) {
						console.log(err, user)
						if (err) {
							res.send(err);
						}
						console.log("Nouveau compte créé");
						//On envoie true si le compte est bien créé
						res.json('OK');
					});


			} else {
				result = 'Ce compte existe déjà.';
				res.json(result);
			}

		});

	}
};

/** DECONNECTION */

exports.logout = function (req, res) {

	console.log("Logout function");

	/*

	//Creation du nouveau joueur dans la base de données
	Joueur.create({ pseudo : req.body.pseudo_signup,
					mail : req.body.mail_signup,
					password : req.body.password_signup},
	function(err, user) { console.log(err, user) });
*/
	res.send("True");
};