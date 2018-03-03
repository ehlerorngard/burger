var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var objectlebars = {
			burger: data  // <––––this is the table "burger" (...right??)
		};
		console.log(objectlebars);
		res.render("index", objectlebars);
	});
});

router.post("/", function(req, res) {
	burger.create("burger_name", req.body.burgerName, function(result) {
			res.json({ id: result.insertId });
		});
});

router.put("/", function(req, res) {
	var condition = "id = " + req.body.id;

	console.log("the condition is " + condition);
		// "devoured" is the actual column in the table
	burger.devour({ devoured: req.body.devoured }, condition, function(result) {
		res.send("burger devoured");
	});
});

module.exports = router;