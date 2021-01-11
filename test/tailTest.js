const assertArraysEqual = require('../assertEqual');
const tail = require('../tail');


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, (["Lighthouse", "Labs"])); // => will always fail!
assertArraysEqual(result, (["Lighthouse", "Labss"]));

