// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8080;
var app = express();

// Sets up static route to public folder
// =============================================================
app.use(express.static("public"));

// parse application/x-www-form-urlencoded - set to false for simplifed use
// =============================================================
app.use(bodyParser.urlencoded({ extended: false }));

// Allow for put method to be used
// =============================================================
app.use(methodOverride("_method"));

// parse application/json
// =============================================================
app.use(bodyParser.json());

// Set Handlebars
// =============================================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up routes for application
// =============================================================
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT);
