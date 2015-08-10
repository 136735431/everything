/**
 * Created by admin on 2015/8/9.
 */

var mongodb = require("./MongoDb.js");
var mongoose = mongodb.mongoose;
var db = mongodb.db;

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

function remove(id,callback){
    userInfoModel.remove({_id:id},callback);
}

module.exports.save =save;
module.exports.list = list;
module.exports.remove=remove;