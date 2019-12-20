var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function(request,response){

    var path=url.parse(request.url).pathname;
    console.log(path);
    switch(path){
        case '/':
            renderHTML('./index.html',response);
            break;
        default:
            response.writeHead(404);
            response.write("404 page not found");
            response.end();
    }

}).listen(2445);
console.log("server created");
function renderHTML(path,response){
        fs.readFile(path,"UTF-8",function(err,data){
            if(err){
                response.writeHead(404);
                response.write("Page not found");
            }else{
                response.writeHead(200,{'Content-Type':'text/html'});
                response.write(data);
            }
        })
}