/**
 * Created by admin on 2015/8/9.
 */
var config = require("../config.js");
var mongoose = require('mongoose');
var db = mongoose.createConnection(config.mongodb);
db.on('error',console.error.bind(console,'Á¬½Ó´íÎó:'));

var UserInfoSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    phone:String,
    createdate:{type:Date,default:Date.now}
});

var userInfoModel = db.model("UserInfo",UserInfoSchema);

function save(user,callback){
    var myuser = new userInfoModel(user);
    myuser.save(callback);
}

function list(callback){
    userInfoModel.find(function(err,list){
        callback(err,list);
    });
}

module.exports.save =save;
module.exports.list = list;
