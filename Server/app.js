// Set up
var express  = require('express');
var app      = express();

// Config
require("./config")(app);

// Models
require("./models")(app); 

// Routes
require("./routes")(app); 
 

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");


