var orm = require("../config/orm.js");

var burger = {
	selectAll: function(callback) {
		orm.selectAll("burger", function(res) {
			callback(res);
		});
	},
	create: function(cols, vals, callback) {
		orm.create("burger", cols, vals, function(res) {
			callback(res);
		});
	},
	devour: function(colvalObj, condition, callback) {
		orm.devour("burger", colvalObj, condition, function(res) {
			callback(res);
		});
	}
};

module.exports = burger;