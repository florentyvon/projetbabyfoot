"use strict";

//Lecture du port serie (usb) de l'arduino

const SerialPort = require('serialport');


//Connexion du client au serveur
var io = require('socket.io-client');
var socket = io.connect('http://192.168.1.1:8080');

/*
//Pour tests
//Ecoute la confirmation de connexion
socket.on('RPIconnected',function(no){
//Envoie le score
socket.emit('score','r');
});
*/

//var fs = require('fs');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('/dev/ttyACM0', {
baudRate: 115200
});


const parser = port.pipe(new Readline({ delimiter: '\n' }));

parser.on('data', function (data) {
//Affichage des données
//console.log(data[0]);
socket.emit('score',data[0]);


//fs.writefileSync("enregistrement","data","UTF-8");
});


console.log("Server running");
