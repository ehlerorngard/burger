var express = require("express");
var bodyParser = require("body-parser");
require("path");

var PORT = process.env.PORT || 3001;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(PORT, function() {
	console.log("Listening on port " + PORT);
});