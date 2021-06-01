///all wrapped in side of a function in node
//(function (exports, require, module, __filename, __dirname) {     // Module wrapper function

const EventEmitter = require('events');   //EventEmitter is class/container/blue print therefore capitalize

//  console.log(__filename);
//  console.log(__dirname);

var url = 'http://mylogger.io/log';   //private


class Logger extends EventEmitter {           //pascal naming for classes
  log(message) {       //don't need function key word (function inside a class - now a method)
    //send http request
    console.log(message);   

    //raise an event                - send multiple values about an event inside an object { properties: }
    //Emit - making a noise, produce something - signalling that an event happened
    this.emit('messageLogged', { id: 1, url: 'http://'});    

  }
}

//raise:  logging (data: message)
//const log = require('./logger');
//log('message');

//module.exports.log = log;    //add method (log) to module exports objects - empty object
module.exports = Logger;      //export single function - now export Logger class
//module.exports.endPoint = url;     // if we wanted to export

//})