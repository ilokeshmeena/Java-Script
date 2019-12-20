var http=require('http');
var custom=require('./custom');
var evaluate=require('./evaluate');
var http=require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'text/plain'})
    response.write("Welcome to node.js");
    response.write("\n"+evaluate.sum(5,3));
    response.write(custom.date())
    response.end();
}).listen(6968)

console.log("Server created");