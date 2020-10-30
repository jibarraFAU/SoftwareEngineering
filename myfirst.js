var http = require('http');
var dt = require('./myfirstmodule'); //require module in same directory.

http.createServer(function (req, res) //create server!
{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end();

}).listen(8080); //listen on port 8080

