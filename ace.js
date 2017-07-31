//! ace.js
//! version : 0.1.4
//! author : Alan Hettinger
//! license : MIT

var a = 'acemnorsuvwxz';

// flags
// s - string
// x - integer
// z - negative integer
// o - float
// r - negative float
// w - float backfill

function encode(s) {
  if (typeof(s) == 'string') return encodeString(s);
  if (s.toString().replace('.', '').length > 15) {
    console.warn('Warning: Numbers longer than 15 digits may lose precision when encoded.');
  }
  if (typeof(s) == 'number' && s % 1 === 0) return encodeInteger(s);
  if (typeof(s) == 'number') return encodeFloat(s);
}

function decode(s) {
  if (s.startsWith('s')) return decodeString(s);
  if (s.startsWith('x') || s.startsWith('z')) return decodeInteger(s);
  if (s.startsWith('o') || s.startsWith('r')) return decodeFloat(s);
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

function encodeFloat(s) {
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
  s = s.split('').map(i => { return a.indexOf(i).toString(13) }).join('');
  return sign * parseInt(s, 13);
}

function decodeString(s) {
  return s.slice(1).match(/.{2}/g).map(i => {
    i = a.indexOf(i[0]).toString(13) + a.indexOf(i[1]).toString(13);
    return String.fromCharCode(parseInt(i, 13));
  }).join('');
}

function decodeFloat(s) {
  let sign = (s[0] == 'o') ? 1 : -1;
  let d = (s[1] == 'w') ? s.slice(2, 3) : s.slice(1, 3);
  d = d.split('').map(i => { return a.indexOf(i).toString(13) }).join('');
  d = parseInt(d, 13);
  s = s.slice(3);
  s = s.split('').map(i => { return a.indexOf(i).toString(13) }).join('');
  return sign * parseInt(s, 13) / Math.pow(10, s.length - d + 1);
}

module.exports = {
  encode,
  decode
};



