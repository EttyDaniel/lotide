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

const eqObjects = function(object1,object2) {
  let isEqual = true;
  let obj1Keys = Object.keys(object1);//array with all of object1 keys
  let obj2Keys = Object.keys(object2);//array with all of object2 keys
  //if it's the same number of keys
  if (obj1Keys.length === obj2Keys.length) {
    //going over all the keys of object1
    for (let i = 0; i < obj1Keys.length; i++) {
      //if both are arrays
      if (Array.isArray(object1[obj1Keys[i]]) && Array.isArray(object2[obj1Keys[i]])) {
        isEqual = eqArrays(object1[obj1Keys[i]],object2[obj1Keys[i]]);
        if (!isEqual) {
          break;
        }
      } else
      //if object1[key] not equal to object2[key] then it's not equal - set to false and break;
      if (object1[obj1Keys[i]] !== object2[obj1Keys[i]]) {
        isEqual = false;
        break;
      }
    }
  } else //not the same number of keys
    isEqual = false;
  return isEqual;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;//import library
  //console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual,expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

};

const objectA = {a: '1', b: 2};
const objectB = {b: 2, a: '1'};
const objectC = {a: '1', b: '2'};
assertObjectsEqual(objectA,objectB);
assertObjectsEqual(objectA,objectC);
assertObjectsEqual(objectC,objectB);
// let isEqual = eqObjects(objectA,objectB);
// console.log(isEqual);
// isEqual = eqObjects(objectA,objectC);
// console.log(isEqual);
//assertObjectsEqual(objectA,objectB);

module.exports = assertObjectsEqual;