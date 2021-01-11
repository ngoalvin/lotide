const flatten = function(array) {
  let flattened = [];
  for (let elm of array) {
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

module.exports = flatten;
// const flat = [1,[2],3,4,[5,6,7]];
// assertArraysEqual(flatten(flat), [1,2,3,4,5,6,7]);
