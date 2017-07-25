//! ace.js
//! version : 0.1.3
//! author : Alan Hettinger
//! license : MIT

var a = 'acemnorsuvwxz';

// flags
// s - string
// x - integer
// z - negative integer
// o - float
// r - negative float

function encode(s) {
  if (Math.abs(s) > 9007199254740991) {
    console.warn('Warning: Integers greater than 9007199254740991 may not encode accurately');
  }
  if (typeof(s) == 'string') return encodeString(s);
  if (typeof(s) == 'number' && s % 1 === 0) return encodeInteger(s);
  if (typeof(s) == 'number' && s % 1 !== 0) return encodeString(s); // float placeholder
  // if (typeof(s) == 'number') return encodeFloat(s);
}

function decode(s) {
  if (s.startsWith('s')) return decodeString(s);
  if (s.startsWith('x') || s.startsWith('z')) return decodeInteger(s);
  // if (s.startsWith('o') || s.startsWith('r')) return decodeFloat(s);
}

function encodeInteger(s) {
  let flag = (s >= 0) ? 'x' : 'z';
  let res = '';
  s = Math.abs(s).toString(13);
  for (i in s) res += a[parseInt(s[i], 13)];
  return flag + res;
}

function encodeString(s) {
  let res = '';
  s = s.toString();
  for (i in s) {
    i = s.charCodeAt(i).toString(13);
    res += a[parseInt(i[0], 13)] + a[parseInt(i[1], 13)];
  }
  return 's' + res;
}

function decodeInteger(s) {
  let res = '';
  sign = (s[0] == 'x') ? 1 : -1;
  s = s.slice(1);
  for (i in s) res += a.indexOf(s[i]).toString(13);
  res = parseInt(res, 13);
  return sign * res;
}

function decodeString(s) {
  let res = '';
  s = s.slice(1).match(/.{2}/g);
  for (i in s) {
    let n = a.indexOf(s[i][1]);
    n += a.indexOf(s[i][0]) * 13;
    res += String.fromCharCode(n);
  }
  return res;
}

module.exports = {
  encode,
  decode
};