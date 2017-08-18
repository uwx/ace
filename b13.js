// b13.js
// licensed under 'just do it'
// originally licensed under MIT
// (see LICENSE file)

/*
  Charset:
  
  (q|w)(e|r)(t|y)(u|i)(p|o)
  (a|s)(d|f)(g|h)(k|j|l)
  (z)(c|x)(b|v)(m|n)
  
  (first is what it encodes to. TODO: Perhaps encode duplicate sequences to different chars?)
  
  The basic rule: No keys next to each other, prioritize encoding to keys at the corners. Z is alone because it's next to shift.
  Of course, this works terribly in Dvorak/German/Albanian/Turkish/AZERTY and all those other funky ones.
 */

(() => {
  const {keys} = Object;

  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  function base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var len = binaryString.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  function base64ToArray(base64) {
    var binaryString = window.atob(base64);
    var len = binaryString.length;
    var bytes = [];
    for (var i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  var charset = {
    'q': ['w'],
    'e': ['r'],
    't': ['y'],
    'u': ['i'],
    'p': ['o'],
    'a': ['s'],
    'd': ['f'],
    'g': ['h'],
    'k': ['j', 'l'],
    'z': [],
    'c': ['x'],
    'b': ['v'],
    'm': ['n'],
  };

  // encode table
  var a = keys(charset).sort(); // reg. object doesn't guarantee order. we just want it to be the constant.
  //var a = encoders.join('');

  // decode table
  // it's not pretty, i suppose.
  var indices = keys(charset).reduce((p, c) => {
    const index = a.indexOf(c);
    // add the index of the key in `a`
    p[c] = index;
    // add all the values as well
    for (let i of charset[c]) {
      p[i] = index; // the values map to the same index, of course
    };
    return p;
  }, {});

  // returns the index in `a` for a valid charset character.
  function decodeIndex(x) {
    // old: only found the encoding index
    //return a.indexOf(x);
    // new: look for any index available:
    return indices[x];
  }

  // flags
  // s - string
  // b - Number
  // y - array (implicit, so array-like and Uint8Array works as well)

  function encode(s) {
    if (s !== s) return 'nan'; // specify test for NaN since NaN does not equal itself
    if (!s) return ''; // if no `s` provided, or s == ''
    if (typeof(s) == 'string') return 's' + encodeString(s);
    if (typeof(s) == 'number') return 'b' + encodeNumber(s);
    if (s.length !== undefined) return 'y' + encodeRaw(s);
  }

  function decode(s) {
    if (!s) return ''; // if no `s` provided, or s == ''
    if (s == 'nan') return NaN;
    if (s[0] == 's') return decodeString(s.substring(1));
    if (s[0] == 'b') return decodeNumber(s.substring(1));
    if (s[0] == 'y') return decodeRaw(s.substring(1));
  }

  function encodeNumber(s) {
    return encodeString(s.toString());
  }

  function encodeString(s) {
    return s.split('').map(i => {
      i = i.charCodeAt(0).toString(13);
      return a[parseInt(i[0], 13)] + a[parseInt(i[1], 13)];
    }).join('');
  }

  function encodeRaw(s) {
    return encodeString(arrayBufferToBase64(s));
  }

  function decodeString(s) {
    return s.match(/.{2}/g).map(i => {
      i = decodeIndex(i[0]).toString(13) + decodeIndex(i[1]).toString(13);
      return String.fromCharCode(parseInt(i, 13));
    }).join('');
  }

  function decodeNumber(s) {
    return parseFloat(decodeString(s));
  }

  function decodeRaw(s) {
    return base64ToArray(decodeString(s));
  }

  // detect browser/nodejs
  const exports = typeof module !== 'undefined' ? module.exports : (window.b13 = {});

  exports.encode = encode;
  exports.decode = decode;
})();
