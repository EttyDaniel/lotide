const words = ["ground", "control", "to", "major", "tom"];

const map = function(array,callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(firstArray,secondArray) {
  let sameLength = (firstArray.length === secondArray.length);
  let equal;
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

const results1 = map(words, word => word[0]);
assertArraysEqual(results1,['g','c','t','m','t']);
module.exports = map;