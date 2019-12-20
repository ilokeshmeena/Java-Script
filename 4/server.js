var buf=Buffer.alloc(10);
buf.write("hello");
console.log(buf);

var buf2=Buffer.from("I am lokesh meena");
console.log(buf2);

console.log(buf.toString());
console.log(buf2.toString());
console.log(buf.toJSON());