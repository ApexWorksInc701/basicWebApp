const http = require('http'); // requiring http module
const router = require('./routes'); // requiring routes module

const port = 8000; // assigning port number

// request handler
const requestHandler = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

};

// creating the server
const server = http.createServer(router.handleRequest);

// listening for port
server.listen(port, ()=>{
  console.log(`Server is running at port ${port}`);
} );