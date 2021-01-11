const without = function(source, itemsToRemove) {
  let output = source;
  for (let item of itemsToRemove) {
    let index = output.indexOf(item);
    if (output.includes(item) && index > -1) {
      output.splice(index, 1);
    }
  }
  return output;
};

module.exports = without;
// const test = without([], []);
// console.log(test);
// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

