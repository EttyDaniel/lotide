
//returns the array without the head (first element)
const tail = function(array) {
  let newArray = [];
  //if the array has more than one element we will return array starting from index = 1
  if (array.length >= 1) {
    newArray = array.slice(1);
  }
  //if the array has one item or no items returns empty array
  return newArray;
};

module.exports = tail;

