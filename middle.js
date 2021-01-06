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
  if (array1.length !== array2.length || !(Array.isArray(array1)) || !(Array.isArray(array2))) {
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

const middle = function(array) {
  let output = [];
  if (array.length < 3) {
    return output;
  } else if (!(isEven(array.length))) {
    output.push(array[midIndex(array)]);

  } else {
    output.push(array[midIndex(array) - 1], array[midIndex(array)]);

  }
  return output;
};

const midIndex = function(array) {
  return Math.floor(array.length / 2);
};

const isEven = function(num) {
  return num % 2 === 0;
};

assertArraysEqual(middle([1,2]), [1,2]);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);

