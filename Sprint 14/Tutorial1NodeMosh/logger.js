///all wrapped in side of a function in node
//(function (exports, require, module, __filename, __dirname) {     // Module wrapper function


  console.log(__filename);
  console.log(__dirname);

  var url = 'http://mylogger.io/log';   //private

  function log(message) {       //private
    //send http request
    console.log(message);
  }

//module.exports.log = log;    //add method (log) to module exports objects - empty object
module.exports = log;      //export single function
//module.exports.endPoint = url;     // if we wanted to export

//})