var bank = 'acemnorsuvwxz';

function encode(s) {
  let res = '';
  if (typeof(s) == 'number') {
    s = s.toString(13);
    for (i in s) {
      res += bank[parseInt(s[i], 13)];
    }
    return 'x' + res;
  }
  if (typeof(s) == 'string') {
    for (i in s) {
      i = s.charCodeAt(i).toString(13);
      res += bank[parseInt(i[0], 13)] + bank[parseInt(i[1], 13)]
    }
    return res;
  }
}

function decode(s) {
  let res = '';
  if (s.startsWith('x')) {
    s = s.slice(1);
    for (i in s) res += bank.indexOf(s[i]).toString(13);
    return parseInt(res, 13);
  } else {
    s = s.match(/.{2}/g)
    for (i in s) {
      let n = bank.indexOf(s[i][1]);
      n += bank.indexOf(s[i][0]) * 13;
      res += String.fromCharCode(n);
    }
    return res;
  }
}

module.exports = {
  encode,
  decode
};