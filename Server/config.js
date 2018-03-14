var express  = require('express');
var app      = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function(app){

    // Configuration
    app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
    app.use(bodyParser.json()); // Send JSON responses
    app.use(logger('dev')); // Log requests to API using morgan
    app.use(cors());
    
    
    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

}

