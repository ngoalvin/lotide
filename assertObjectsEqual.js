const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// assertObjectsEqual({1:1, 2:1, 3:[1,3]}, {1:1, 2:1, 3:[1,3]});
// assertObjectsEqual({1:1, 2:1, 3:[1,3]}, {1:1, 2:1, 3:[1,2]});