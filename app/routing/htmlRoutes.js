// ============
// DEPENDENCIES
// ============
var path = require ('path');

// ============
// ROUTING
// ============

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '/../../public/home.html'))
	});

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '/../../public/survey.html'))
	});

	// this is used to make an unknown page as default to index.html
	app.use(function(req, res){
		res.render('/../public/home.html');
	});
};