// import/require the module
const http = require("http");
const myApp = http.createServer((request, response) => {
  console.log(request.headers);
  // process the incoming request
  // respond -- respons object
  response.end(
    "Hello, this is your server responding to a request!!! Albert One"
  );
});
// start the server--- tell your computer to listen to incoming request throug acertain port
// PORT -- numbers assigned to applications for identity as they communicate with other devices
myApp.listen(3000, () =>
  console.log("server started and running on port number 3000")
);
