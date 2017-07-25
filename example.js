var ace = require('./ace');

// encoding a string
s = ace.encode('Hello world!');
console.log(s); // osswununuserveusuwunsves

// decoding a string
s = ace.decode(s);
console.log(s); // Hello world!

// encoding an integer
i = ace.encode(125038937);
console.log(i); // xczzosacw

// decoding an integer
i = ace.decode(i);
console.log(i); // 125283948

// encoding a float
f = ace.encode(123.5);
console.log(f); // mwmxmzmsnc

// decoding a float
f = ace.decode(f);
console.log(f); // 123.5