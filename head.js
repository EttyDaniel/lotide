const assertEqual = require('./assertEqual');


const head = function(array) {

  let first = undefined;
  //we will return the first element only if array's length is at least 1
  if (array.length > 0)
    first = array[0];
  return first;
};
