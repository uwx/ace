var ace = require('./ace');

stringEncode = ace.encode('Hello world!');
console.log(stringEncode); // sowsnunusureevsuwunuvsse

stringDecode = ace.decode(stringEncode);
console.log(stringDecode); // Hello world!

integerEncode = ace.encode(125000);
console.log(integerEncode); // ouxnnx

integerDecode = ace.decode(integerEncode);
console.log(integerDecode); // 125000