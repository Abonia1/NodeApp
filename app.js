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


/*EVENT MODULE
// class eventemitter
const EventEmitter=require('events');
//object emitter
const emitter=new EventEmitter();

//register the listener-listener is a function which is called when the event is raised
emitter.on('messageLogged',function(arg){
    console.log('listener called',arg);
});

//with arrow function
emitter.on('messageLogged',(arg)=>{
    console.log('listener called',arg);
});

//signaling/raise an event
//emitter.emit('messageLogged',{id:1,url:'http://'});

const logger=require('./logger');
logger('messages');*/


/*EXTEND EVENTEMITTER

const EventEmitter=require('events');

const Logger=require('./logger');
const logger=new Logger();

//Register a listener
logger.on('messageLogged',(arg)=>{
    console.log('listener called',arg);
});

logger.log('message');*/


/*HTTP MOODULE*/
const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello');
        res.end;
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
});

server.listen(3000);

console.log('server is listeing on port 3000....');

