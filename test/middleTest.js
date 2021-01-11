const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('if array is length of 2 return []', () => {
    const array = [1,2];
    assert.deepEqual(middle(array), []);
  });

  it('if array is odd length return an array with the middle elm', () => {
    const array = [1,2,3];
    assert.deepEqual(middle(array), [2]);
  });

  it('if array is even length return an array with 2 of the middle elm ', () => {
    const array = [1,2,3,4,5,6,7,8];
    assert.deepEqual(middle(array), [4,5]);
  });

  it('if array empty return empty array', () => {
    const array = [];
    assert.deepEqual(middle(array), []);
  });
});

// assertArraysEqual(middle([1,2]), []);
// assertArraysEqual(middle([1,2,3]), [2]);
// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);