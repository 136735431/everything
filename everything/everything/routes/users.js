
var userInfo = require("../models/UserInfo.js");
var dateConvert =require("../commontool/dateConvert");

module.exports.register=register;
module.exports.getUser=getUser;
module.exports.getUserList=getUserList;
module.exports.delUser=delUser;

function register(req,res){


    //serInfo.UserInfo
    var user = {username:"时萌",password:"123",email:"136735431@qq.com"};//,
        //createdate:dateConvert.dataParse(Date.now())};

    userInfo.save(user,function(err){
        if(err){
                    res.send(err.message);
                }else{
                    res.send("成功了！");
                }
    });
};

function login(){

}

function logout(){

}

function getUser(){

}

function getUserList(req,res){
    //获取所有用户
    userInfo.list(function(err,list){
        if(!err){
            var userList = new Array();
            list.forEach(function(value){
                var r = dateConvert.dataParse(value.createdate);
                value.date = r;
                userList.push(value);
            });

            //渲染到页面
            res.render("user",{title:"all user",userList:userList});
        }else{
            res.send(err.message);
        }
    });

}

function changePassword(){

}

function updateUser(){

}

function delUser(req,res){
    var id = req.param("id");
    if(id){
        userInfo.remove(id,function(err){
            if(err){
                res.send({code:1,message:err.message});
            }else{
                res.send({code:0});
            }
        });
    }else
    {
        res.send({code:1});
    }
}