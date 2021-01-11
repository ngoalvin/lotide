const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!(isLetter(sentence[i]))) {
      continue;
    }
    let c = sentence[i].toLowerCase();
    if (results[c]) {
      results[c].push(i);
    } else {
      results[c] = [i];
    }
  }
  return results;
};

const isLetter = function(str) {
  return str.length === 1 && str.match(/[a-z]/i);
};

module.exports = letterPositions;

// console.log(letterPositions('hello'));

// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2,3]);
// assertArraysEqual(letterPositions("hello").o, [4]);


