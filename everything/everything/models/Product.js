/**
 * Created by shimeng on 2015/8/10.
 */
var mongodb = require("./MongoDb.js");
var mongoose = mongodb.mongoose;
var db = mongodb.db;

var productSchema = new mongoose.Schema({
    name:String,
    createdate:{type:Date,default:Date.now},
    attr1:String,
    attr2:{type:Number,default:1}
});

var productModel = db.model("Product",productSchema);


function save(model,callback){
    var p = new productModel(model);
    p.save(callback);
};

function list(callback){
    productModel.find(function(err,list){
        callback(err,list);
    });
}

function remove(id,callback){
    productModel.remove({_id:id},callback);
}

module.exports.save =save;
module.exports.list = list;
module.exports.remove=remove;