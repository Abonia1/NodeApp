
    console.log(__filename);
    console.log(__dirname);
//log messages in cloud
var url='http://mylogger.io/log';
function log(message){
    //send an http request
    console.log(message);
}

//below code uses object for to refer more than one function
//module.exports.log=log;

//above line canbe  written also because we do have only one function 
module.exports=log;
//module.exports.endPoint=url;

/*exports the logs follow too
exports.log=log;*/

/* jshint app.js used to find errors in compile time*/
