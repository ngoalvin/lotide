const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length || !(Array.isArray(array1)) || !(Array.isArray(array2))) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!(isLetter(sentence[i]))) {
      continue;
    }
    c = sentence[i].toLowerCase();
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

const loopOverObj = function(obj) {

}

console.log(letterPositions('hello'));

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);


