# ace
The ace module is a base 13 encoder / decoder that uses lowercase characters with no ascenders or descenders (the parts of a character that extend above the median and below the baseline). This module serves no practical purpose other than to produce an interesting aesthetic. It can handle ASCII strings and signed integers. Floats are encoded as strings, but a special float encoder is in progress.

One possible application of this would be to increment "share" links in an aesthetic way.

## Changelog

### 0.1.3

- Limit on integers removed
- Integers greater than MAX_SAFE_INTEGER (9007199254740991) provide an accuracy warning
- Negative integers now encoded as integers with their own special flag (z)
- Strings are encoded with their own special flag (s)
- Refactoring
- MIT license added
  
## Usage

```javascript
var ace = require('./ace');

// encoding a string
s = ace.encode('Hello world!');
console.log(s); // sosswununuserveusuwunsves

// decoding a string
s = ace.decode(s);
console.log(s); // Hello world!

// encoding an integer
i = ace.encode(125038937);
console.log(i); // xczxvzrnw

// decoding an integer
i = ace.decode(i);
console.log(i); // 125038937

// encoding a float
f = ace.encode(123.5);
console.log(f); // smwmxmzmsnc

// decoding a float
f = ace.decode(f);
console.log(f); // 123.5
```