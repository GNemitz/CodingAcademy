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
