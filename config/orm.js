var connection = require("./connection.js");

function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

function convertObjSQL(ob) {
	var arr = [];
	for (var key in ob) {
		var val = ob[key];
		if (Object.hasOwnProperty.call(ob, key)) {
			if ((typeof val === "string") && (val.indexOf(" ") !== -1)) {
				val = "'" + val + "'";
			}
			arr.push(key + "=" + val);
		}
	}
	return arr.toString();
}


var orm = {
	all: function(tableInput, callback) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},
	create: function(table, cols, vals, callback) {
		var queryString = "INSERT INTO " + table + "(";
		queryString += cols.toString();
		queryString += ") VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ");";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if (err) {
				throw err;
			}
			callback(result);
		});
	},
	update: function(table, colvalObj, condition, callback) {
		var queryString = "UPDATE " + table + " SET " + convertObjectSQL(colvalObj);
		queryString += " WHERE " + condition + ";";

		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		})
	}
}

module.exports = orm;

