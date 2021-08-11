
const eqArrays = function(firstArray,secondArray) {
  let sameLength = (firstArray.length === secondArray.length);
  let equal = false;//assume not equal until proven otherwise
  
  if (sameLength) {
    for (let i = 0; i < firstArray.length; i++) {
      equal = (firstArray[i] === secondArray[i]);
      if (!equal)
        return false;
    }
  } else {//if it's not the same length they are not equal - no point going forward
    return false;
  }
    
  return true;//if I got this fur then firstArray === SecondArray
};

module.exports = eqArrays;
