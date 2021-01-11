const flatten = function(array) {
  let newArray = array.reduce((flat, current) => flat.concat(current), []);
  for (let item of newArray) {
    if (Array.isArray(item)) {
      newArray = flatten(newArray);
    }
  }
  return newArray;
};

module.exports = flatten;

// const flat = [1,[2,[3,[4]]],3,4,[5,6,7]];
// console.log(flatten(flat), [1,2,3,4,5,6,7]);
