'use strict';
var crypto = require('crypto');

//Fonction pour création du salage 
exports.createSalt = function(){
    //Génère une chaine de caracteres aléatoire (longueur de 16) pour le salage 
    return crypto.randomBytes(Math.ceil(16/2))
    .toString('hex') 
    .slice(0,16);
};


//Fonction du hachage + salage du mot de passe 
exports.hashPassword = function(password, salt){

    //Hachage du mot de pass + salage avec algorithme sha512
    var hash = crypto.createHmac('sha512', salt); 
    //Mise à jour du mot de passe
    hash.update(password);
    //Valeur en hexadecimal
    var pswd = hash.digest('hex');
    return {
        pswd,
        salt
    };
};
