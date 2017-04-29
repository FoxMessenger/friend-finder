// this may change to a mysql database if I have the time
// ==========
// DATA
// ==========

var friends = require('../data/friends');

// ==========
// ROUTING
// ==========
module.exports = function(app){

	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});
	
	app.post('/api/friends', function(req, res){
	  console.log(req.body)
	});


}


	  // var name = req.body.name;
	  // var photo = req.body.photo;
	  // var scores = req.body.scores;  