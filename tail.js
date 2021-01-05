// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let condition = true;
  if (actual.length !== expected.length) {
    condition = false;
    } else {
      for (let i = 0; i < actual.length; i++) {
        if (!(actual[i] === expected[i])) {
          condition = false;
        }
      }
    }
  console.log(condition ? `Assertion Passed: ${actual} === ${expected}` : `Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  let newArray = array;
  newArray.shift();
  return newArray;
};
// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, (["Lighthouse", "Labs"])); // => will always fail!
assertEqual(result, (["Lighthouse", "Labss"]));