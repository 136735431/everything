/**
 * Created by shimeng on 2015/8/10.
 */
var moment = require("moment");
moment.locale("zh-cn");

function dataParse(str){
    var r = new moment(str);
    var result = r.format("YYYY-MM-DD HH:mm:ss");
    return result;
}

module.exports.dataParse =dataParse;