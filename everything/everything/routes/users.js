
var userInfo = require("../models/UserInfo.js");


module.exports.register=register;
module.exports.getUser=getUser;
module.exports.getUserList=getUserList;


function register(req,res){
    //serInfo.UserInfo
    var user = {username:"时萌",password:"123",email:"136735431@qq.com"};
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
            //渲染到页面
            res.render("user",{title:"all user",userList:list});
        }else{
            res.send(err.message);
        }
    });

}

function changePassword(){

}

function updateUser(){

}