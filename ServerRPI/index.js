"use strict";

//Lecture du port serie (usb) de l'arduino

const SerialPort = require('serialport');

//Connexion du client au serveur
var io = require('socket.io-client');
var socket = io.connect('http://192.168.1.1:8080');
//Nom du babyfoot
var nameBF = "BF_ISTIA";


//Connection au Port Série pour lire les données arduino
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('/dev/ttyACM0', {
baudRate: 115200
});

//On envoi la confirmation de connaxion au serveur
socket.emit('connection-bf', {"nameBF" : "BF_ISTIA" });
console.log("emit connction bf");

const parser = port.pipe(new Readline({ delimiter: '\n' }));

//Quand on recoit une demande de score
parser.on('data', function (data) {


//On envoie les scores
socket.emit('maj-score',{ "goal": data[0], "nameBF" : nameBF} );
console.log(data);
console.log("emit maj-score");

 


});


console.log("Server running");
