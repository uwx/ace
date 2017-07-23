var ace = require('./ace');

s = ace.encode('Hello world!');
console.log(s); // osswununuserveusuwunsves

s = ace.decode(s);
console.log(s); // Hello world!

i = ace.encode(125283948);
console.log(i); // xczzosacw

i = ace.decode(i);
console.log(i); // 125283948

f = ace.encode(123.5);
console.log(f); // mwmxmzmsnc

f = ace.decode(f);
console.log(f); // 123.5