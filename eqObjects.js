// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length || !(Array.isArray(array1)) || !(Array.isArray(array2))) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      return eqArrays(array1[i], array2[i])
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let [key,value] of Object.entries(obj1)) {
    if (Array.isArray(value)) {
      if (!eqArrays(value, obj2[key])) {
        return false;
      }
    } else if (typeof value === 'object') {
      return eqObjects(obj1[key], obj2[key]);
    } else if (value !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
let test1 = eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
let test2 = eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
let test3 = eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
let test4 = eqObjects(cd, cd2); // => false

const cd4 = { c: "1", d: ["2", 3, 4] };
const cd5 = { c: "1", d: ["2", 3, 4] };

let test5 = eqObjects(cd4, cd5); // => true


assertEqual(test1, true);
assertEqual(test2, false);
assertEqual(test3, true);
assertEqual(test4, false);
assertEqual(test5, true);


console.log(eqArrays([1,2,3], 5));