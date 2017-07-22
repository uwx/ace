# ace
The ace module is a base 13 encoder / decoder that uses lowercase characters with no ascenders or descenders (the parts of a character that extend above the center line and below the baseline). This module serves no practical purpose other than to produce an interesting aesthetic. It can handle ASCII strings of any length and unsigned integers up to 15 digits.

### Demo (example.js)

```javascript
var ace = require('./ace');

s = ace.encode('Hello world!');
console.log(s); // osswununuserveusuwunsves

s = ace.decode(s);
console.log(s); // Hello world!

i = ace.encode(125789472847);
console.log(i); // xxxeusucmnz

i = ace.decode(i);
console.log(i); // 125789472847
```