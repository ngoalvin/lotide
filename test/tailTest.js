const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('return a new array without the 1st element of the array', () => {
    const newArray = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(newArray), ["Lighthouse", "Labs"]);
  });
});


