# ace
A base 13 encoder / decoder that uses lowercase letters with no ascenders or descenders.

## Overview
Project specs often call for an uncompromising use of characters that do not encroach vertically into surrounding spaces. The ace library facilitates this need with a lightweight base 13 encoder that can vertically compress strings of any length and up to 32-bit unsigned integers.

## Example (example.js)

```javascript
var ace = require('./ace');

stringEncode = ace.encode('Hello world!');
console.log(stringEncode); // sowsnunusureevsuwunuvsse

stringDecode = ace.decode(stringEncode);
console.log(stringDecode); // Hello world!

integerEncode = ace.encode(125000);
console.log(integerEncode); // ouxnnx

integerDecode = ace.decode(integerEncode);
console.log(integerDecode); // 125000
```