var http = require('http');

var fs = require('fs');


// Chargement du fichier index.html affiché au client

var server = http.createServer(function(req, res) {

    fs.readFile('./index.html', 'utf-8', function(error, content) {

        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(content);

    });

});


// Chargement de socket.io

var io = require('socket.io').listen(server);
var currentScoreB = 0;
var currentScoreR = 0;


io.sockets.on('connection', function(socket) {
    //Envoyer onfirmation de la connexion du client RPI
    socket.emit('RPIconnected', 'Connected');
    //Envoyer onfirmation de la connexion du client nav WEB avec le score actuel
    socket.emit('WEBconnected', { scoreB: currentScoreB, scoreR: currentScoreR });



    //Ecouter la reception des buts
    socket.on('score', function(score) {
        //log
        //console.log('But pour equipe : ' + score);

        //Si but pour equipe bleue
        if (score == 'b') {

            //On mets à jour le score et on l'envoi à la page html
            currentScoreB++;
            socket.broadcast.emit('butEquipeBleue', currentScoreB);

            //Si but pour equipe bleue	
        } else {

            if (score == "r") {
                //On mets à jour le score et on l'envoi à la page html
                currentScoreR++;
                socket.broadcast.emit('butEquipeRouge', currentScoreR);
            }
        }

    });

    //Ecouter l'evenement de reset du score
    socket.on('reset', function() {
        currentScoreB = 0;
        currentScoreR = 0;
    });


});







server.listen(8080, "192.168.1.1");