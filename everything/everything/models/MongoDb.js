/**
 * Created by shimeng on 2015/8/10.
 */
var config = require("../config.js");
var mongoose = require('mongoose');

var db = mongoose.createConnection(config.mongodb);
db.on('error',console.error.bind(console,'连接错误:'));

module.exports.mongoose=mongoose;
module.exports.db=db;