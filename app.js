/*function sayHello(name){
    console.log('hello'+name)
}*/
//sayHello('Abo');
//console.log(window);
//console.log(module);

/*for to use object to call function
//var logger=require('./logger');
//console.log(logger);
//logger.log('message')*/

/*with single function
const logger=require('./logger');
logger('messages');*/

/*working with path 
const path=require('path');
var pathObj=path.parse(__filename);
console.log(pathObj);/

/*working with os module

const os=require('os');

var totalMemory=os.totalmem();
var freeMemory=os.freemem();

//Template String
//ES6 / ES2015 : ECMAScript 6


console.log(`Total memory:${totalMemory}`);
console.log(`Free memory:${freeMemory}`);*/


/*File syste module
mconst fs=require('fs');


const files=fs.readdirSync('./')

//console.log(files);

fs.readdir('./',function(err,files){
    if(err)console.log('Error',err);
    else console.log('Result',files);
});*/


/*EVENT MODULE*/
// class eventemitter
const EventEmitter=require('events');
//object emitter
const emitter=new EventEmitter();

//register the listener
emitter.on('messageLogged',function(){
    console.log('listener called');
});

//signaling/raise an event
emitter.emit('messageLogged');

//listener is a function which is called when the event is raised

