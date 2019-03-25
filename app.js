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

/*working with path */

//working with os module

const os=require('os');

var totalMemory=os.totalmem();
var freeMemory=os.freemem();

//Template String
//ES6 / ES2015 : ECMAScript 6


console.log(`Total memory:${totalMemory}`);
console.log(`Free memory:${freeMemory}`);

