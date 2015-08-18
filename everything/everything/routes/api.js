/**
 * Created by shimeng on 2015/8/18.
 */



//module.exports = (app) ->
//    app.route('/api1/xxx')
//        .get(controller1.balabala)
//        .post(controller1.lalala)
//app.route('/api1/ooo')
//    .get(controller1.adfasfdas)
//    .post(controller1.ooop)


module.exports = function(app){
    var a= app.route("/api");
    a.get(get1);

    var b = app.route("/api/v1");


    b.get(get2);
}


function get1(req,res){
    res.send("hello Get!");
}

function get2(req,res) {
    res.send("hello Get2 !");
}
