# ace
A base 13 encoder / decoder that uses lowercase letters with no ascenders or descenders.

## Overview
Probably one of the most significant advances in encoding since the advent of the secret decoder ring in *A Christmas Story*, ace allows you to encode and decode strings and integers to a series of lower-case letters with no ascenders or decenders. If your project spec calls for strings that can fit into very tight horizontal spaces, this is the library for you.

`
var ace = require('./ace');

stringEncode = ace.encode('Be sure to drink your Ovaltine!');
console.log(stringEncode); // sowsnunusureevsuwunuvsse

stringDecode = ace.decode(stringEncode);
console.log(stringDecode); // Hello world!

integerEncode = ace.encode(120000);
console.log(integerEncode); // wauenx

integerDecode = ace.decode(integerEncode);
console.log(integerDecode); // 120000
`