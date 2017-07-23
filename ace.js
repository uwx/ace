var a = 'acemnorsuvwxz';

function encode(s) {
  let res = '';
  if (typeof(s) == 'number' &&
      s >= 0 && s % 1 === 0 &&
      s.toString().length < 16) { 
    s = s.toString(13);
    for (i in s) {
      res += a[parseInt(s[i], 13)];
    }
    return 'x' + res;
  } 
  s = s.toString();
  for (i in s) {
    i = s.charCodeAt(i).toString(13);
    res += a[parseInt(i[0], 13)] + a[parseInt(i[1], 13)];
  }
  return res;
}

function decode(s) {
  let res = '';
  if (s.startsWith('x')) {
    s = s.slice(1);
    for (i in s) res += a.indexOf(s[i]).toString(13);
    res = parseInt(res, 13);
    if (typeof(res) == 'number') return res
  }
  s = s.match(/.{2}/g);
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