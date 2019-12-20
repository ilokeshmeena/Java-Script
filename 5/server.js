var http=require('http');
var fs=require('fs');

http.createServer(function(request,response){
    var content='';
    var reader=fs.createReadStream('db.txt');
    reader.setEncoding('UTF-8');
    reader.on('error',function(err){
        console.log(err);
    }).on('data',function(chunk){
        content+=chunk;
    }).on('end',function(){
        response.on('error',function(err){
            console.log(err);
        });
    response.setHeader('200',{'Content-Type':'plain/text'})
    response.write(content);
    response.end();
    })
}).listen(6968);