const middle = function(array) {
  let output = [];
  if (array.length < 3) {
    return output;

  } else if (!(isEven(array.length))) {
    output.push(array[midIndex(array)]);
    
  } else {
    output.push(array[midIndex(array) - 1], array[midIndex(array)]);

  }
  return output;
};

const midIndex = function(array) {
  return Math.floor(array.length / 2);
};

const isEven = function(num) {
  return num % 2 === 0;
};

module.exports = middle;


