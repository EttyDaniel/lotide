const eqArrays = function(firstArray,secondArray) {
  let sameLength = (firstArray.length === secondArray.length);
  let equal;
  console.log(firstArray, secondArray);
  if (sameLength) {
    for (let i = 0; i < firstArray.length; i++) {
      equal = (firstArray[i] === secondArray[i]);
      if (!equal)
        i = firstArray.length;
    }
  } else
    return sameLength;
  return equal;
};

const assertArraysEqual = function(firstArr,secondArr) {
  assertEqual(eqArrays(firstArr,secondArr),true);
};


const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
//console.log(without([1,2,3,2],[2,1]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;