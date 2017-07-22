var ace = require('./ace');

stringEncode = ace.encode('Hello world!');
console.log(stringEncode); // osswununuserveusuwunsves

stringDecode = ace.decode(stringEncode);
console.log(stringDecode); // Hello world!

integerEncode = ace.encode(125000);
console.log(integerEncode); // xnnxuo

integerDecode = ace.decode(integerEncode);
console.log(integerDecode); // 125000
