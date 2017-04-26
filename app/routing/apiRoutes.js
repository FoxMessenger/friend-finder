module.exports = function(app){
	app.get('/survey', function(req, res){
		res.json(survey);
	});


	// this is make an unknown page as default to index.html
	app.get(function(req, res){
		res.sendFile(path.join(__dirname, 'home.html'))
	});

}

