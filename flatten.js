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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);
assertArraysEqual(flatten([1, [8,8], [3, 9,9], 5, [6]]),[1,8,8,3,9,9,5,6]);