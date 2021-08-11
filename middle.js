
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
module.exports = middle;




