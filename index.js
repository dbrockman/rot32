var lookup = { '=' : '=' };

(function (b64, i) {
  for (; i < 64; i++) {
    lookup[b64[i]] = b64[(i + 32) % 64];
  }
}('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', 0));

function map(c) {
  return lookup[c];
}

function rot(s) {
  return s.split('').map(map).join('');
}

module.exports = rot;
