var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');


module.exports= function(app){

     
    //Connection à la base de données
    mongoose.connect('mongodb://localhost/bfdb');
    mongoose.connection.on("error", function(){
        console.log("Erreur de connexion à la base de données");
    });
    mongoose.connection.on("open", function(){
        console.log("Connexion réussie à la base de données");  
    });

    /** Collection joueurs **/

    //Schéma associé aux joueurs
    var joueurSchema = mongoose.Schema({
    //        id : { type : mongoose.Schema.Types.ObjectId, ref : 'Id'},
        pseudo: String,
        mail : String,
        password: String,
        salt: String
    }, {collection : 'joueurs'});
    
    //Modele associé au schéma joueurs
    var Joueur = mongoose.model('JoueurModel', joueurSchema);
  
    //Export de Joueur
    module.exports.Joueur = Joueur; 

}