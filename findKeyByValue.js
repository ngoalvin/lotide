const findKeyByValue = function(obj, show) {
  const objKeys = Object.keys(obj);
  for (let key of objKeys) {
    if (obj[key] === show) {
      return key;
    }
  }
  // return undefined;
};

module.exports = findKeyByValue;


// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");