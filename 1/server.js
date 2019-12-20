var http=require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'text/plain'})
    response.write("Welcome to node.js");
    response.end();
}).listen(6969)

console.log("Server created");