const http = require('http');

// takes request listener as arg (a function that it executes for every incoming req)
const server = http.createServer((req, res) => {
  // say we wanted to know which path was targetted . . .
  //    we would have to parse the req and figure it out
  // Express handles this for us and makes our lives easier, hence
  //    why we will be adding it . . .

  res.end('This is my first response');
});

// to listen must pass a port number
// default port of hosting provider || 3000 for dev
server.listen(process.env.PORT || 3000);
