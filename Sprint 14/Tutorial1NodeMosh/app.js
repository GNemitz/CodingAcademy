/*
function sayHello(name) {
  console.log ('Hello ' + name);
}

//sayHello('Gwen');
console.log(window);  //global object

setTimeout()  //call function after delay
clearTimeout();

setInterval()
clearInterval()

window.console.log  //window object - window not needed

window.setTimeout
*/

//var message = '';   //not added to the global object in node like JS 
                    //- global scope new definition can overwrite to prev definition - avoid global - modules - at least 1 file and 1 module
//console.log(global.message);      //in node we don't have window object - global object instead


//console.log(module);   //not global object
//load module - require function with 1 argument
//best to use const so it doesn't get overwriten - tools like jshint will scan JS code for errors like this
const log = require('./logger');   //or logger.js node knows it is a js file   ./logger in same folder or  ../ if in parent folder

//console.log(logger);
log('message');     
