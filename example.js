var ace = require('./ace');

stringEncode = ace.encode('Be sure to drink your Ovaltine!');
console.log(stringEncode); // sowsnunusureevsuwunuvsse

stringDecode = ace.decode(stringEncode);
console.log(stringDecode); // Hello world!

integerEncode = ace.encode(120000);
console.log(integerEncode); // wauenx

integerDecode = ace.decode(integerEncode);
console.log(integerDecode); // 120000

