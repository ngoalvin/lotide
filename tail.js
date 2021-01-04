// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual.length === expected.length) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } 
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

const tail = function(array) {
  let newArray = array;
  newArray.shift();
  return newArray;
};
// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, (["Lighthouse", "Labs"])); // => will always fail!