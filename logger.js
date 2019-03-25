/*
   
//console.log(__filename);
//console.log(__dirname);


const EventEmitter=require('events');
    //object emitter
const emitter=new EventEmitter();
    
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

/* jshint app.js used to find errors in compile time */
//emitter.emit('messageLogged',{id:1,url:'http://'});

/*EXTENDING EVENTEMITTER*/
const EventEmitter=require('events');
var url='http://mylogger.io/log';

class Logger extends EventEmitter{
     log(message){
        //send an http request
        console.log(message);

        this.emit('messageLogged',{id:1,url:'http://'});
    }

}
module.exports=Logger;