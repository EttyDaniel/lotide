const assertEqual = require("./assertEqual");

const findKeyByValue = function(objToSearch,valToSearch) {
  let keyMatchesVal;
  for (let k in objToSearch) {
    if (objToSearch[k] === valToSearch)
      keyMatchesVal = k;
  }
  return keyMatchesVal;
};

//Testing------------------------------------------
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Office"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

//End of Testing ------------------------------------

module.exports = findKeyByValue;
