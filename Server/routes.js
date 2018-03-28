var auth = require("./controllers/auth");
var data = require("./controllers/data");

// Routes
module.exports = function(app) {
    app.post('/signin', auth.signin);
    app.post('/signup', auth.signup);
    app.post('/logout', auth.logout);
    app.post('/getDataPlayer', data.getDataPlayer);
    app.post('/getStatsPlayer', data.getStatsPlayer);
    app.post('/bookReservation', data.bookReservation);
    app.post('/getMyReservations', data.getMyReservations)
}