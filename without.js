// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let condition = true;
  if(array1.length !== array2.length || !(Array.isArray(array1)) || !(Array.isArray(array2))) {
    condition = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        condition = false;
      }
    }
  }
  return condition;
};

const without = function(source, itemsToRemove) {
  let output = source;
  for (let item of itemsToRemove) {
    let index = output.indexOf(item)
    if (output.includes(item) && index > -1) {
      output.splice(index, 1);
    }
  }
  return output;
};

const test = without([], []);
console.log(test);
// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


console.log(assertArraysEqual(test, []));