var auth = require("./controllers/auth");

// Routes
module.exports = function(app){

	app.post('/signin', auth.signin);
	app.post('/signup', auth.signup);
	app.post('/logout', auth.logout);

}

