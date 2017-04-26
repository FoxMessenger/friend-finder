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
	
	app.post('/api/friends', function(req, res) {
    
	    if (friends.length < 5) {
	    	tableData.push(req.body);
	    	res.json(true);
	    } else {
			friends.push(req.body);
			res.json(false);
	    }
	});

}


