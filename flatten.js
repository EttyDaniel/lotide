const assertArraysEqual = require("./assertArraysEqual");


const flatten = function(arrayToFlatten) {
  let flatArray = [];
  for (let i = 0; i < arrayToFlatten.length; i++) {
    //if Array
    if (Array.isArray(arrayToFlatten[i])) {
      for (let k = 0; k < arrayToFlatten[i].length; k++)
        flatArray.push(arrayToFlatten[i][k]);
    } else { //not array
      flatArray.push(arrayToFlatten[i]);
    }
  }
  return flatArray;
};

//Testing------------------------------------------

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);
assertArraysEqual(flatten([1, [8,8], [3, 9,9], 5, [6]]),[1,8,8,3,9,9,5,6]);

//End of Testing ------------------------------------

module.exports = flatten;