const http = require("http");
const fs = require("fs");
// function rqListener(req, res) {

// }

const server = http.createServer((request, response) => {
  /*
  Event loop - on going listener - event driven server. Purpose, single threaded JS execution
  */
  const {
    url,
    method,
    headers
  } = request;
  if (url === "/") {
    response.write("<html>");
    response.write("<head><title>Test Page</title></head>");
    response.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>test</button></input></form></body>")
    response.write("</html>");
    return response.end();
  }
  response.setHeader("Content-type", "text/html");
  response.write("<html>");
  response.write("<head><title>Test Page</title></head>");
  response.write("<body><h1>new page</h1></body>")
  response.write("</html>");
  response.end();
  // process.exit(); //close/kill request
});
server.listen(3000); //creating server
