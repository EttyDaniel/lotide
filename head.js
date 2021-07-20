const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


const head = function(array) {
  let first = undefined;
  first = array[0];
  return first;
};

//Test

assertEqual(head([4]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");