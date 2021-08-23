const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`👍🏼 Assertion Passed: ${actual} === ${expected}`);
  else {
    console.log(`👎🏼 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//TEST
//------------------------------------------------------------------------
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false

module.exports = eqObjects;