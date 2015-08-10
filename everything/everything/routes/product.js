/**
 * Created by shimeng on 2015/8/10.
 */
var product = require("../models/Product.js");
var dateConvert = require("../commontool/dateConvert.js");

module.exports.delProduct=delProduct;
module.exports.getList=getList;
module.exports.addProduct=addProduct;

function getList(req,res){
    product.list(function(err,list){
        if(!err){

            var plist = new Array();
            list.forEach(function(value){
                var r = dateConvert.dataParse(value.createdate);
                value.date = r;
                plist.push(value);
            });

            res.render("list",{title:"产品列表",pList:plist});
        }else
        {
            res.send(err.message);
        }
    });

}

function delProduct(req,res){
    var id = req.param("id");
    product.remove(id,function(err){
        if(err){
            res.send({code:1,message:err.message});
        }else{
            res.send({code:0});
        }
    });
}

function addProduct(req,res){
    var name = req.body.name;
    var attr1 = req.body.attr1;
    var attr2 = req.body.attr2;

    var model ={name:name,attr1:attr1,attr2:attr2};
    //console.log(model);
    product.save(model,function(err){
        if(err){
            res.send({code:1,message:err.message});
        }else
        {
            res.send({code:0});
        }
    })
}