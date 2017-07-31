var ace = require('./ace');

// encoding a string (note that strings take up more space than integers or floats)
s = ace.encode('Hello world!');
console.log(s); // sosswununuserveusuwunsves

// decoding a string
s = ace.decode(s);
console.log(s); // Hello world!

// encoding an integer (note that integers and floats take up less space than strings)
i = ace.encode(123456789);
console.log(i); // xczsrsnsc

// decoding an integer
i = ace.decode(i);
console.log(i); // 123456789

// encoding a float
f = ace.encode(1234.5678);
console.log(f); // ownesmmnns

// decoding a float
f = ace.decode(f);
console.log(f); // 1234.5678