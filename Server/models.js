var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;


module.exports = function(app) {


    //Connection à la base de données
    mongoose.connect('mongodb://localhost/bfdb');
    mongoose.connection.on("error", function() {
        console.log("Erreur de connexion à la base de données");
    });
    mongoose.connection.on("open", function() {
        console.log("Connexion réussie à la base de données");
    });

    /** Collection joueurs **/

    //Schéma associé aux joueurs

    // ------- JOUEUR -------
    var joueurSchema = mongoose.Schema({
        //        id : { type : mongoose.Schema.Types.ObjectId, ref : 'Id'},
        pseudo: String,
        nom_joueur: String,
        prenom_joueur: String,
        date_naiss: Date,
        nom_equipe: String, // miniscule uniquement!!
        id_stat: { type: Schema.Types.ObjectId, ref: 'Statistique' },
        id_amitie: Number,
        type: String, // type de connexion : admin, 
        mail: String,
        password: String,
        salt: String,
        niv: Number,
    }, { collection: 'joueurs' });

    // ------- STATIQUES -------
    var StaticSchema = mongoose.Schema({
        //  id : { type : mongoose.Schema.Types.ObjectId, ref : 'Id'},
        nbr_match: Number,
        nbr_but: Number,
        nbr_victoires: Number,
        nbr_defaites: Number,
        gen_rank: Number,
        friend_rank: Number,
    }, { collection: 'Statistiques' });

    // ------- EQUIPE -------
    var EquipeSchema = mongoose.Schema({
        //  id : { type : mongoose.Schema.Types.ObjectId, ref : 'Id'},
        nom_equipe: String,
        nbr_joueurs: Number,
        id_stat: Number,
    }, { collection: 'Equipe' });

    // ------- CHAMPIONNATS -------
    var ChampionnatSchema = mongoose.Schema({
        //  id : { type : mongoose.Schema.Types.ObjectId, ref : 'Id'},
        nbr_equipe: Number,
        date_championnat: Date,
        id_stat: Number,
        classement: Array,
        organisateur: String,
    }, { collection: 'Championnat' });

    // ------- AMIS -------
    var AmisSchema = mongoose.Schema({
        //  id : { type : mongoose.Schema.Types.ObjectId, ref : 'Id'},

    }, { collection: 'Amis' });

    // ------- Partie -------
    var PartieSchema = mongoose.Schema({
        //  id : { type : mongoose.Schema.Types.ObjectId, ref : 'Id'},
        ID_game: Number,
        etat: String, //etat ( attente, en cours , terminé)
        nom_baby: Number,
        tab_joueurs: Array,
        id_stat: String,
    }, { collection: 'Partie' });

    //Modele associé au schéma joueurs
    var Joueur = mongoose.model('JoueurModel', joueurSchema);
    var Statistique = mongoose.model('StatistiqueModel', StaticSchema);
    var Equipe = mongoose.model('EquipeModel', EquipeSchema);
    var Championnat = mongoose.model('ChampionnatModel', ChampionnatSchema);
    var Amis = mongoose.model('AmisModel', AmisSchema);
    var Partie = mongoose.model('PartieModel', PartieSchema);

    //-------- Export des collections -----------
    module.exports.Joueur = Joueur;
    module.exports.Statistique = Statistique;
    module.exports.Equipe = Equipe;
    module.exports.Championnat = Championnat;
    module.exports.Amis = Amis;
    module.exports.Partie = Partie;
}