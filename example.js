var ace = require('./ace');

// encoding a string
s = ace.encode('Hello world!');
console.log(s); // sosswununuserveusuwunsves

// decoding a string
s = ace.decode(s);
console.log(s); // Hello world!

// encoding an integer
i = ace.encode(125038937);
console.log(i); // xczxvzrnw

// decoding an integer
i = ace.decode(i);
console.log(i); // 125038937

// encoding a float
f = ace.encode(123.5);
console.log(f); // smwmxmzmsnc

// decoding a float
f = ace.decode(f);
console.log(f); // 123.5