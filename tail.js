const tail = function(array) {
  let newArray = array;
  newArray.shift();
  return newArray;
};

module.exports = tail;


