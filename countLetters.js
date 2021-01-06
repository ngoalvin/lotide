// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  return str.match(/[a-z]/i);
};
