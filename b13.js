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

const {keys} = Object;

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
// x - integer
// z - negative integer
// o - float
// r - negative float
// w - float backfill

// TODO add support for encoding raw byte streams
function encode(s) {
  if (typeof(s) == 'string') return encodeString(s);
  if (s.toString().replace('.', '').length > 15) {
    console.warn('Warning: Numbers longer than 15 digits may lose precision when encoded.');
  }
  if (typeof(s) == 'number' && s % 1 === 0) return encodeInteger(s);
  if (typeof(s) == 'number') return encodeFloat(s);
}

function decode(s) {
  if (!s) return ''; // if no `s` provided, or s == ''
  if (s[0] == 's') return decodeString(s);
  if (s[0] == 'x' || s[0] == 'z') return decodeInteger(s);
  if (s[0] == 'o' || s[0] == 'r') return decodeFloat(s);
}

function encodeInteger(s) {
  let flag = (s >= 0) ? 'x' : 'z';
  s = Math.abs(s).toString(13);
  return flag + s.split('').map(i => { return a[parseInt(i, 13)] }).join('');
}

function encodeString(s) {
  return 's' + s.split('').map(i => {
    i = i.charCodeAt(0).toString(13);
    return a[parseInt(i[0], 13)] + a[parseInt(i[1], 13)];
  }).join('');
}

function encodeFloat(s) { // FIXME this is broken
  let flag = (s >= 0) ? 'o' : 'r';
  s = Math.abs(s).toString();
  let d = s.indexOf('.').toString(13);
  d = d.split('').map(i => { return a[parseInt(i, 13)] }).join('');
  d = (d.length < 2) ? 'w' + d : d;
  s = parseInt(s.replace('.', '')).toString(13);
  s = s.split('').map(i => { return a[parseInt(i, 13)] }).join('');
  return flag + d + s;
}

function decodeInteger(s) {
  let sign = (s[0] == 'x') ? 1 : -1;
  s = s.slice(1);
  s = s.split('').map(i => { return decodeIndex(i).toString(13) }).join('');
  return sign * parseInt(s, 13);
}

function decodeString(s) {
  return s.slice(1).match(/.{2}/g).map(i => {
    i = decodeIndex(i[0]).toString(13) + decodeIndex(i[1]).toString(13);
    return String.fromCharCode(parseInt(i, 13));
  }).join('');
}

function decodeFloat(s) {
  let sign = (s[0] == 'o') ? 1 : -1;
  let d = (s[1] == 'w') ? s.slice(2, 3) : s.slice(1, 3);
  d = d.split('').map(i => { return decodeIndex(i).toString(13) }).join('');
  d = parseInt(d, 13);
  s = s.slice(3);
  s = s.split('').map(i => { return decodeIndex(i).toString(13) }).join('');
  return sign * parseInt(s, 13) / Math.pow(10, s.length - d + 1);
}

// detect browser/nodejs
const exports = typeof module !== 'undefined' ? module.exports : (window.b13 = {});

exports.encode = encode;
exports.decode = decode;
