var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// this is used to parse the JSON that comes in
// used to access the body from the route callback/return
// all these should be used, since we don't know how the json is coming back. These are all safety nets to each other
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wizard_schools_db"
});

require('./apps/routing/apiRoutes')(app);


// REST
// GET /users (index or collection route)
// GET /users/:id (instance or member route)

// POST implies the create
// POST  /users 

// PUT and PATCH are for editing records
	// PUT users/id: (params in request body)
	// PATCH users/id: (params in request body)

// DELETE /user/id: