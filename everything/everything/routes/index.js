var express = require('express');
var router = express.Router();
var user = require("./users");
/* GET home page. */


module.exports = function (app) {
	app.get('/', function (req, res) {
		user.register(req,res);
		res.render('index', { title: 'Express' });
	});

	app.get("/user",function(req,res){
			user.getUserList(req,res);
	});
};

