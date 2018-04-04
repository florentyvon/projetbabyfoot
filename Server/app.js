var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// Config
require("./config")(app);

// Models
require("./models")(app);

// Routes
require("./routes")(app);

// Communication Socket.io
require("./sockets")(io);

// listen (start app with node server.js) ======================================
//Localhost
server.listen(8080);
//Serveur local 
//server.listen(8080, "192.168.1.1");
console.log("App listening on port 8080");