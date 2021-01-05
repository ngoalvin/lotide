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
  if(array1.length !== array2.length || !(Array.isArray(array1)) || !(Array.isArray(array1))) {
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

const flatten = function(array) {
  let flattened = [];
  for(let elm of array) {
    if (Array.isArray(elm)) {
      for (let item of elm) {
        flattened.push(item);
      }
    } else {
      flattened.push(elm);
    }
  }
  return flattened;
};

const flat = [1,[2],3,4,[5,6,7]];
assertArraysEqual(flatten(flat), [1,2,3,4,5,6,7]);
