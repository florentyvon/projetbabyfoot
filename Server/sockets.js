var models = require("./models");
var Joueur = models.Joueur;
var Partie = models.Partie;

// Routes
module.exports = function(io){


    /** STRUCTURE DE allCurrentGames  
     * "allCurrentGames" :{
    "idgame2": {
      "idgame": "idgame2",
      "joueurs": {
        "Steve2": {
          "pseudo": "Steve2",
          "idgame": "idgame2"
        }
      }
    },
    "idgame1": {
      "joueurs": {
        "Flo": {
          "pseudo": "Flo",
          "idgame": "idgame1"
        },
        "Steve": {
          "idgame": "idgame1",
          "pseudo": "Steve"
        }
      },
      "idgame": "idgame1"
      }

  }
     * 
     */

//Variables Globales
var allCurrentGames = {};
var allBabyFoot = {};
var scoreByGame = {};

var n=0;
var erreur = false;

var test = 0;

/** ECOUTE DES CONNECTIONS CLIENTS */
io.sockets.on('connection', function(socket){


    /** ECOUTE : AJOUT D'UN JOUEUR DANS UNE PARTIE  */
    socket.on('set-player', function(dataPlayer) {
        test++;
        console.log('test');
        console.log(test);

         //On ajoute le joueur à la "room"
        socket.join(dataPlayer.idgame); 

        //Si le joueur est déjà présent dans cette partie
        for(var j in allCurrentGames[ dataPlayer.idgame ].players.b){
            if(dataPlayer.pseudo === j){
                erreur = true;
            }
        } 
        for(var j in allCurrentGames[ dataPlayer.idgame ].players.r){
            if(dataPlayer.pseudo === j){
                erreur = true;
            }
        } 
        if(!erreur){
            //Si la partie est en attente de joueurs
            if(allCurrentGames[dataPlayer.idgame].etat === "enAttente"){
                // Si la partie n'est pas complete ( nb equipe B + nb equipe R <nb max ) 
                if(( allCurrentGames[ dataPlayer.idgame ].nbPlayersB + allCurrentGames[ dataPlayer.idgame ].nbPlayersR ) < allCurrentGames[ dataPlayer.idgame ].nbPlayersMax ){
                    //Si le joueur n'a pas d'équipe attribuée
                    if( dataPlayer.equipe === 'b' || dataPlayer.equipe === 'r'){

                        //Si le joueur est de l'equipe bleue 
                        // Et qu'il reste de la place dans l'équipe bleue (nb equipe B < 2 )
                        if( dataPlayer.equipe === 'b' 
                        && allCurrentGames[ dataPlayer.idgame ].nbPlayersB < 2 ){

                            //On ajoute le joueurs au tableau des joueurs equipe Bleue et on incrémente le nombre de joueur equipe Bleue
                            allCurrentGames[ dataPlayer.idgame ]["players"]["b"][dataPlayer.pseudo] = dataPlayer;
                            allCurrentGames[ dataPlayer.idgame ].nbPlayersB++;
                        
                            //On envoie la liste à jour des joueurs au babyfoot
                            io.sockets.to(dataPlayer.idgame).emit('maj-players', { "dataGame": allCurrentGames[ dataPlayer.idgame ] });   

                            //on envoie confirmation au joueur qui se connecte    
                            socket.emit('ack-set-player', {ack :'ok'});

                        }else{

                            //Si le joueur est de l'equipe rouge 
                            // Et qu'il reste de la place dans l'équipe rouge (2 )
                            if( dataPlayer.equipe === 'r' 
                            && allCurrentGames[ dataPlayer.idgame ].nbPlayersR < 2 ){

                                //On ajoute le joueurs au tableau des joueurs equipe Bleue et on incrémente le nombre de joueur equipe Bleue
                                allCurrentGames[ dataPlayer.idgame ]["players"]["r"][dataPlayer.pseudo] = dataPlayer;
                                allCurrentGames[ dataPlayer.idgame ].nbPlayersR++;

                                //On envoie la liste à jour des joueurs au babyfoot
                                io.sockets.to(dataPlayer.idgame).emit('maj-players', { "dataGame": allCurrentGames[ dataPlayer.idgame ] });   

                                //on envoie confirmation au joueur qui se connecte    
                                socket.emit('ack-set-player', {ack :'ok'});

                            //Si il n'y a plus de place dans l'équipe rouge
                            }else{
                                socket.emit('ack-set-player', {ack: 'err_fullteam'});                         
                            }
                        }
                
                    //Si le joueur n'a pas d'équipe attribuée 
                    }else{
                        socket.emit('ack-set-player', {ack: 'err_noteam'});
             
                    }
                //Si la partie est complete
                }else{
                    socket.emit('ack-set-player', {ack: 'err_full'});
              
                }
            }else{
                socket.emit('ack-set-player', {ack: 'err_notopen'});
            }
    //Si joueur déjà présent 
    }else{
        socket.emit('ack-set-player', {ack: 'err_player'});
    
    }
    //reset des variables en mémoire
    erreur=false;
    dataPlayer={};
    ack =null;
    });
 
    /** ECOUTE CREATION DE NOUVELLE PARTIE */
    socket.on('set-game', function(dataGame){
        //On ajoute la partie en cours 
        //On initialise le nb de joueur dans la partie et l'id
        allCurrentGames[dataGame.idgame] = { "nbPlayersB" : 0,
                                    "nbPlayersR" : 0,
                                    "nbPlayersMin" : dataGame.nbJoueursMin,
                                    "nbPlayersMax" : dataGame.nbJoueursMax,
                                    "idgame" : dataGame.idgame, 
                                    "players" : { "b" : {}, "r" : {} },
                                    "config" : { "limiteScore" : dataGame.limiteScore },
                                    "etat" : "enAttente",
                                  }
        //On initialise le tableau des scores pour cette partie 
        scoreByGame[dataGame.idgame] = {
            "r" : 0,
            "b" : 0
        }

        //On lie le babyfoot à la "room"
        socket.join(dataGame.idgame);

        //On envoie l'objet de la partie en cours (à destination du salon de jeu)
        io.sockets.in(dataGame.idgame).emit('maj-players', { "dataGame": allCurrentGames[dataGame.idgame]});   
   
    });

    /**ECOUTE : ANNULATION D'UNE PARTIE */
    socket.on('cancel-game', function(data){

        Partie.remove({id : data.idgame},function(err, countRemoved){
            console.log("Partie "+data.idgame+" annulée");
        })

    });

    /**ECOUTE : AJOUTE DE JOUEURS DANS UNE PARTIE PAR UN AUTRE JOUEUR */
    socket.on('add-player', function(data){
      
        //On cherche le pseudo dans la base de donnée
		Joueur.findOne().where("pseudo").equals(data.pseudo).exec(function(err,currentPlayer){
			//Si le pseudo existe
			if( currentPlayer !==null ){
                socket.join(data.idgame);
                //On envoie la confirmation
                socket.emit('ack-add-player', {"dataPlayer" : data});
			}else{
                //On envoie la confirmation
                socket.emit('ack-add-player', {"rep": 'player_nofound'});
			}	
		});
    });

    /** ECOUTE : SUPPRIMER JOUEUR D'UNE PARTIE */
    socket.on('remove-player', function(dataPlayer){

        //Si le joueur n'est pas présent dans la partie 
        if(typeof allCurrentGames[dataPlayer.idgame]["players"][dataPlayer.equipe][dataPlayer.pseudo] === "undefined" ){
            socket.emit('ack-remove-player', {"ack": 'player_nofound'});
        }{
            delete allCurrentGames[dataPlayer.idgame]["players"][dataPlayer.equipe][dataPlayer.pseudo];
              
            if(dataPlayer.equipe === 'b'){ allCurrentGames[dataPlayer.idgame].nbPlayersB--; }
            else {allCurrentGames[dataPlayer.idgame].nbPlayersR--;}

            //MAJ de la partie en cours (à destination du salon de jeu)
            io.sockets.in(dataPlayer.idgame).emit('maj-players', { "dataGame": allCurrentGames[dataPlayer.idgame]});   
            io.sockets.in(dataPlayer.idgame).emit('ack-remove-player', {"ack": 'ok', "playername": dataPlayer.pseudo});
    
      }
    });

    /** ECOUTE : LANCEMENT D'UNE PARTIE */

    socket.on('launch-game', function(data){

        //Si le babyfoot n'est pas connecté
        if( typeof allBabyFoot[data.nameBF] === "undefined"){
            socket.emit('no-bf-connecter', {ack :'ok'});
        }else{

            //Créer l'objet des joueurs à envoyer à la bdd
            var keysB = Object.keys(allCurrentGames[data.idgame]["players"]["b"]);
            var keysR = Object.keys(allCurrentGames[data.idgame]["players"]["r"]);
            var allplayers = {};

            for( var i=0 ; i < allCurrentGames[data.idgame].nbPlayersB; i++){
                allplayers[keysB[i]] = {
                    "pseudo" : keysB[i],
                    "equipe" : "b"
                }
            }
            for( var j=0 ; j < allCurrentGames[data.idgame].nbPlayersR; j++){
                allplayers[keysR[j]] = {
                    "pseudo" : keysR[j],
                    "equipe" : "b"
                }
            }
        
            console.log(allplayers);

            

            //Update le nombre de joueurs, les joueurs et l'etat de la partie dans la base de données
                //Creation d'une nouvelle partie dans la base de données
            Partie.update({ id : data.idgame },       
                { 
                    etat : "enCours",
                    nbjoueurs : {
                        min : allCurrentGames[data.idgame].nbPlayersMin,
                        max : allCurrentGames[data.idgame].nbPlayersMin,
                        b : allCurrentGames[data.idgame].nbPlayersB,
                        r : allCurrentGames[data.idgame].nbPlayersR, 
                        
                    },
                    joueurs : allplayers,

            },
            function(err, user) { 
                if(err){
                }
                console.log("Nouvelle partie créée");

            });
            allCurrentGames[data.idgame].etat="enCours";
            //On joute l'id de la partie actuelle au babyfoot concerné
            allBabyFoot[data.nameBF]["currentGame"] = data.idgame;

        
        }
        });


        /** ECOUTE LES CONNEXIONS DES BABYFOOT  */
        socket.on('connection-bf', function(data){
            console.log(" on connection BF");

            switch(data.nameBF){        
                /** Si le babyfoot istia est connecté */
                case "BF_ISTIA": 
                //On l'ajoute au tableau des babyfoot connectés
                allBabyFoot[data.nameBF] = { "nameBF" : data.nameBF, "currentGame" : ""} ; 
                //On l'ajoute à la room des babyfoot
                socket.join("room-bf"); 
                console.log("join room bf");
                break;
            }

        });

        /** ECOUTE : DEMANDE DES SCORES DU BABYFOOT */
        socket.on('ask-score-bf', function(data){
            console.log("on ask-score-bf");

            //Si le babyfoot est connecté
            if(typeof allBabyFoot[data.nameBF] === "object"){
                //On demande au babyfoot d'envoyer les scores 
                io.sockets.in('room-bf').emit('get-score', { "nameBF": data.nameBF, "idgame": data.idgame });   
                console.log("emit get score");
            }else{
                //sinon on envoie une erreur
                socket.emit('no_bf_connected', 'err');
     
            }


        });

        //ECOUTE LA RECEPTION DES SCORES
        socket.on('maj-score',function(data){
            console.log("on maj-score");
            console.log(scoreByGame);
            console.log(data);
            //Mise à jour du tableau des scores
            //Si but pour l'équipe Bleu
            console.log(allBabyFoot[ data.nameBF ]["currentGame"]);
            if(data.goal === "b")
                scoreByGame[ allBabyFoot[ data.nameBF ]["currentGame"]  ]["b"]++;
            else{ 
                //Sinon si but pour equipe rouge 
                if(data.goal === "r"){
                    scoreByGame[allBabyFoot[ data.nameBF ]["currentGame"] ]["r"]++;
                }
            }

            //On envoie les scores à jour à la room concernée
            io.sockets.in(allBabyFoot[ data.nameBF ]["currentGame"] ).emit('maj-score-game', { "score": scoreByGame[allBabyFoot[ data.nameBF ]["currentGame"]], "idgame": allBabyFoot[ data.nameBF ]["currentGame"], "nameBF": data.nameBF });   
            console.log("emit maj-score-game");
        });

        /** ECOUTE ARRET DE PARTIE */

        socket.on('stop-game', function(data){
            console.log("Stop Game");
            Partie.update({ id : data.idgame },       
                { 
                    etat : "terminee",
                    score : {
                        "equipeB" : data.scoreB,
                        "equipeR" : data.scoreR,
                    },
            },
            function(err, user) { 
                if(err){
                }
                console.log("Partie Terminée");
            });
        });

        /** ECOUTE MAJ DES SCORES USER */

        socket.on('maj-score-user', function(data){

            //mise à jour des scores
            scoreByGame[data.idgame]["r"] = data.scoreR;
            scoreByGame[data.idgame]["b"] = data.scoreB;
            
        
        });

    });
}