const assertArraysEqual = require("./assertArraysEqual");


const without = function(source,itemsToRemove) {
  //The new Array I will return in the end.
  let newArray = [];
  let assistingArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        assistingArray[i] = false;
        break;
      } else
        assistingArray[i] = true;
    }
  }

  for (let k = 0; k < assistingArray.length; k++) {
    if (assistingArray[k] === true)
      newArray.push(source[k]);
  }
  
  return newArray;

};

//Testing------------------------------------------
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//End of Testing ------------------------------------

module.exports = without;