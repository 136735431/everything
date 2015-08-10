var express = require('express');
var router = express.Router();
var user = require("./users");
var product = require("./product");
/* GET home page. */


module.exports = function (app) {
	app.get('/', function (req, res) {
		user.register(req,res);
		res.render('index', { title: 'Express' });
	});

	app.get("/user",function(req,res){
			user.getUserList(req,res);
	});
	app.delete("/user",function(req,res){
		user.delUser(req,res);
	});

	app.get("/list",function(req,res){
		product.getList(req,res);
	});

	app.delete("/list",function(req,res){
		product.delProduct(req,res);
	});

	app.post("/list",function(req,res){
		product.addProduct(req,res);
	});
};

