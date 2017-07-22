# ace
The ace library is a base 13 encoder / decoder that relies on lowercase characters that do not have ascenders or descenders (the parts of a character that extend above the center line and below the baseline).

### Overview
Project specs often call for an uncompromising use of characters that do not encroach vertically into surrounding spaces. The ace library facilitates this need with a lightweight base 13 encoder that can handle ASCII strings of any size and unsigned integers up to 15 digits in length.

### Demo (example.js)

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