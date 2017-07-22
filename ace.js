var bank = 'acemnorsuvwxz';

function encode(s) {
  if (typeof(s) == 'number') {
    i = Math.floor(s / 13);
    if (!i) return bank[s % 13] + 'x';
    else return bank[s % 13] + encode(i)
  }
  if (typeof(s) == 'string') {
    let res = '';
    for (i of s) {
      i = i.charCodeAt(0);
      let a = bank[i % 13];
      let b = bank[Math.floor(i / 13) % 13];
      res += a + b;
    }
    return res;
  }
}

function decode(s) {
  if (s.endsWith('x')) {
    let res = 0;
    s = s.slice(0, -1)
    for (i in s) {
      res += bank.indexOf(s[i]) * Math.pow(13, i);
    }
    return res;
  } else {
    let res = '';
    s = s.match(/.{2}/g)
    for (i in s) {
      let n = bank.indexOf(s[i][0]);
      n += bank.indexOf(s[i][1]) * 13;
      res += String.fromCharCode(n);
    }
    return res;
  }
}

module.exports = {
  encode,
  decode
};