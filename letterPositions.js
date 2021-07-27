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
    console.log(`👍🏼 Assertion Passed: ${actual} === ${expected}`);
  else {
    console.log(`👎🏼 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);

      } else
        results[sentence[i]] = [i];
    }
  }
  return results;
};

//TEST
const resultsObj = letterPositions("hello");
assertArraysEqual(resultsObj["h"],[0]);
assertArraysEqual(resultsObj["e"],[1]);
assertArraysEqual(resultsObj["l"],[2,3]);
assertArraysEqual(resultsObj["o"],[4]);

