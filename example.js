var ace = require('./ace');

stringEncode = ace.encode('Be sure to drink your Ovaltine!');
console.log(stringEncode); // cowsrexuavwuwsrezusurevswucurumurenvsuavwurecrcvrsnuzucuruwsse

stringDecode = ace.decode(stringEncode);
console.log(stringDecode); // Be sure to drink your Ovaltine!

integerEncode = ace.encode(125000);
console.log(integerEncode); // ouxnnx

integerDecode = ace.decode(integerEncode);
console.log(integerDecode); // 125000