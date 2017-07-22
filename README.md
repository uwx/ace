# ace
A base 13 encoder / decoder that uses lowercase letters with no ascenders or descenders.

## Overview
When your project spec demands an uncompromising use of characters that do not encroach vertically into surrounding spaces.

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