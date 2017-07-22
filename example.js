var ace = require('./ace');

stringEncode = ace.encode('Be sure to drink your Ovaltine!');
console.log(stringEncode); // cowsrexuavwuwsrezusurevswucurumurenvsuavwurecrcvrsnuzucuruwsse

stringDecode = ace.decode(stringEncode);
console.log(stringDecode); // Be sure to drink your Ovaltine!

integerEncode = ace.encode(120000);
console.log(integerEncode); // wauenx

integerDecode = ace.decode(integerEncode);
console.log(integerDecode); // 120000

