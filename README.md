# ace
A base 13 encoder / decoder that uses lowercase letters with no ascenders or descenders.

## Overview
Probably one of the most significant advances in encoding since the advent of the secret decoder ring in *A Christmas Story*, ace allows you to encode and decode strings and integers to a series of lower-case letters with no ascenders or decenders. If your project spec calls for strings that can fit into very tight horizontal spaces, this is the library for you.

## Example (example.js)

```javascript
var ace = require('./ace');

stringEncode = ace.encode('Be sure to drink your Ovaltine!');
console.log(stringEncode); // cowsrexuavwuwsrezusurevswucurumurenvsuavwurecrcvrsnuzucuruwsse

stringDecode = ace.decode(stringEncode);
console.log(stringDecode); // Be sure to drink your Ovaltine!

integerEncode = ace.encode(125000);
console.log(integerEncode); // ouxnnx

integerDecode = ace.decode(integerEncode);
console.log(integerDecode); // 125000
```