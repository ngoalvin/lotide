const countLetters = function(str) {
  const output = {};
  for (let c of str) {
    if (!(isLetter(c))) {
      continue;
    }
    c = c.toLowerCase();
    if (output[c]) {
      output[c] += 1;
    } else {
      output[c] = 1;
    }
  }
  return output;
};

const isLetter = function(str) {
  return str.length === 1 && str.match(/[a-z]/i);
};

module.exports = countLetters;
