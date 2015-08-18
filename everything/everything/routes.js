/**
 * Created by shimeng on 2015/8/18.
 */
//module.exports = (app) ->
//    require('./routes/product')(app)
//    require('./routes/api')(app)
//


module.exports =  function(app){

    //require('./routes/product')(app);
    require('./routes/api')(app);
}