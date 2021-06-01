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
//const log = require('./logger');   //or logger.js node knows it is a js file   ./logger in same folder or  ../ if in parent folder

//console.log(logger);
//log('message');     

//built in path module  (find in nodejs.org docs section)
/*const path = require('path');   

var pathObj = path.parse(__filename);             //parse method  __filename is argument

console.log(pathObj); */

//built in OS module - operating system
/*const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);

//template string  - helps to build a string without concatenation
//ES6 / ES2015  : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);  //${} place holder for argument (dynamic)
console.log(`Free Memory: ${freeMemory}`);

//files in node
const fs = require('fs');

// directory method - display all files and folder in the current folder
//const files = fs.readdirSync('./');   //always use async/non blocking (to not keep server busy - single thread) not synchronous
//console.log(files);  //display string array

fs.readdir('./', function(err, files) {  //first parameter is path, 2nd parameter is callback function
  if (err) console.log('Error', err);  
  else console.log('Results', files);  
});


const EventEmitter = require('events');   //EventEmitter is class/container/blue print therefore capitalize
//const { emit } = require('process');   // I don't know where this came from???
//const emitter = new EventEmitter();  //emitter is object that we can use


const Logger = require('./logger');  //now class
const logger = new Logger();    // instance of the custom class that you created that extends the EventEmitter - use below

//register a listener - called when messageLogged event/function is raised
//order is important - need to register first before raising event
//arrow function - remove the word function
logger.on('messageLogged', (arg) => {  //2 arguments - name of event, callback function (listener) - can pass arg - e, eventArg, arg,etc
  console.log('Listener called', arg);
});

logger.log('message');
*/

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('HelloWorld');
    res.end();
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});    //is an event emitter

server.listen(3000);

console.log('Listening on port 3000...');

