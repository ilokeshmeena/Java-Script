// var http=require('http');
var events=require('events');
var eventEmitter=new events.EventEmitter();

var function1=function(){
    console.log("hello 1");
}
var function2=function(){
    console.log("hello 2");
}

eventEmitter.on('event1',function1);
eventEmitter.on('event2',function2);
eventEmitter.emit('event1');
eventEmitter.emit('event2');

// http.createServer(function(request,response){
//     response.writeHead(200,{
//         'content-Type':'plain/text'
//     })
//     response.writeHead();
//     response.end();
// }).listen(6969);
// console.log("Server created");