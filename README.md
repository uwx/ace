# ace
The ace module is a base 13 encoder / decoder that uses lowercase characters with no ascenders or descenders (the parts of a character that extend above the median and below the baseline). This module serves no practical purpose other than to produce an interesting aesthetic. It can handle ASCII strings of any length and unsigned integers of up to 15 digits. Negative numbers, floats, and integers greater than 15 digits are encoded as strings. As you can see in the example below, integers get compressed slightly due to the base 13 encoding. Strings take up extra space as it takes two characters to represent each 128-bit ASCII character.

One possible application of this would be to increment "share" links in an aesthetic way. Up to 999 trillion unique links could be incremented.

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

f = ace.encode(123.5);
console.log(f); // mwmxmzmsnc

f = ace.decode(f);
console.log(f); // 123.5
```