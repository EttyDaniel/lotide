const eqArrays = function(firstArray,secondArray) {
  let sameLength = (firstArray.length === secondArray.length);
  let equal = false;
  if (sameLength) {
    equal = true;
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
//----------------MIDDLE----------------------------------------------------------
const middle = function(array) {
  let middleOfArray = [];
  let middleIndex = Math.floor((array.length) / 2);
  
  //If Array is less than 3 items than return empty array since there's no middle
  if (array.length < 3)
    return middleOfArray;
  //If array is not with even number of items - push the middle item
  if (array.length % 2 !== 0) {
    middleOfArray.push(array[middleIndex]);
  //If array is with even number of items - push the 2 middle items
  } else {
    middleOfArray.push(array[middleIndex - 1]);
    middleOfArray.push(array[middleIndex]);
  }
  return middleOfArray;
};
//----------------END OF MIDDLE----------------------------------------------------------
//TEST
let middleToCheck = middle([1,2,3,3]);
assertArraysEqual(middleToCheck,[2,3]);
middleToCheck = middle([1]);
assertArraysEqual(middleToCheck,[]);
middleToCheck = middle([1, 2]);
assertArraysEqual(middleToCheck,[]);
middleToCheck = middle([1, 2, 3]);
assertArraysEqual(middleToCheck,[2]);
middleToCheck = middle([1, 2, 3, 4, 5]);
assertArraysEqual(middleToCheck,[3]);
middleToCheck = middle([1, 2, 3, 4]);
assertArraysEqual(middleToCheck,[2,3]);
middleToCheck = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(middleToCheck,[3,4]);




