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
		var obj = {};
		// console.log('this ran')
		console.log('body: ' + JSON.stringify(req.body));
		res.send(req.body);
	});


}


