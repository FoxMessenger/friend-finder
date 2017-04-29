//======================
//	DEPENDENCIES
//======================

var bodyParser 	= require('body-parser');
var express 	= require('express');
var app 		= express();
var path 		= require('path');
var apiRoutes 	= require('./app/routing/apiRoutes')(app);
var PORT 		= process.env.PORT || 3000;
var mysql = require('mysql');


app.use(express.static('./public'));

// app.use('/assets', express.static(__dirname + '/public'));
// app.use(express.static("/public/assets"));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/static', express.static(path.join(__dirname, '/public')));
// app.use('/assets',express.static(path.join(__dirname, '/public/assets')));

// this is used to parse the JSON that comes in
// used to access the body from the route callback/return
// all these should be used, since we don't know how the json is coming back. These are all safety nets to each other
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


// app.use('/css',express.static(path.join(__dirname, 'public/stylesheets')));

app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});

// this is to get the CSS files




// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "friend_finder"
// });


// REST
// GET /users (index or collection route)
// GET /users/:id (instance or member route)

// POST implies the create
// POST  /users 

// PUT and PATCH are for editing records
	// PUT users/id: (params in request body)
	// PATCH users/id: (params in request body)

// DELETE /user/id: