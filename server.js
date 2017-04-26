//======================
//	DEPENDENCIES
//======================
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// var path = require('path');


var apiRoutes = require('./app/routing/apiRoutes')(app);

var PORT = process.env.PORT || 3000;

// this is used to parse the JSON that comes in
// used to access the body from the route callback/return
// all these should be used, since we don't know how the json is coming back. These are all safety nets to each other
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



// var mysql = require('mysql');
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