var http=require('http');
var fs=require('fs');
http.createServer(function(request,response){
    fs.readFile("./user.json","UTF-8",function(err,data){
        response.writeHead(200,{'Content-Type':'application/json'});
        data=JSON.parse(data);
    response.end(JSON.stringify(data));
    })
    
}).listen(8083);

console.log("server created");