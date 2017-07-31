# ace

The ace module is a base 13 encoder / decoder that uses lowercase characters with no ascenders or descenders (the parts of a character that extend above the median and below the baseline). This module serves no practical purpose other than to produce an interesting aesthetic. It can handle ASCII strings, signed integers, and signed floats.

## Changelog

### 0.1.4

- Special float encoder added with flags 'o' and 'r' for positive and negative floats
- Refactoring

### 0.1.3

- Limit on integers removed
- Integers greater than MAX_SAFE_INTEGER (9007199254740991) provide an accuracy warning
- Negative integers now encoded as integers with their own special flag 'z'
- Strings are encoded with their own special flag 's'
- Refactoring
- MIT license added
  
## Usage

```javascript
var ace = require('./ace');

// encoding a string (note that strings take up more space than integers or floats)
s = ace.encode('Hello world!');
console.log(s); // sosswununuserveusuwunsves

// decoding a string
s = ace.decode(s);
console.log(s); // Hello world!

// encoding an integer (note that integers and floats take up less space than strings)
i = ace.encode(123456789);
console.log(i); // xczsrsnsc

// decoding an integer
i = ace.decode(i);
console.log(i); // 123456789

// encoding a float
f = ace.encode(1234.5678);
console.log(f); // oznesmmnns

// decoding a float
f = ace.decode(f);
console.log(f); // 1234.5678
```