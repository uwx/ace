var ace = require('./ace');

s = ace.encode('Hello world!');
console.log(s); // osswununuserveusuwunsves

s = ace.decode(s);
console.log(s); // Hello world!

i = ace.encode(125789472847);
console.log(i); // xxxeusucmnz

i = ace.decode(i);
console.log(i); // 125789472847

f = ace.encode(123.5);
console.log(f); // mwmxmzmsnc

f = ace.decode(f);
console.log(f); // 123.5