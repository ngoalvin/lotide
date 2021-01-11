const assertArraysEqual = require('../assertEqual');
const tail = require('../tail');


const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result)
assertArraysEqual(result, (["Lighthouse", "Labs"])); // => will always fail!
assertArraysEqual(result, (["Lighthouse", "Labs"]));

