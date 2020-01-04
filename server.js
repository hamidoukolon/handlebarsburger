// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(express.static("public"))

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  Set up handlebars
var handlebars = require('express-handlebars');
app.engine("handlebars", handlebars({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

//  Sets up routes
var routes = require('./routes');
app.use(routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});