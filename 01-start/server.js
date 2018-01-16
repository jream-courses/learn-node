const http = require('http');

const port = 3300;

const mainRequest = (req, res) => {
  res.end('I\'m a server!');
};

const server = http.createServer(mainRequest);
server.listen(port, (error) => {
  if (error) {
    return console.log(`An error occurred ${error}`);
  }

  return console.log(`Running Server at: http://localhost:${port}`);
});
