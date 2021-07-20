const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = [];
  if (array.length > 1) {
    newArray = array.slice(1);
  }
  return newArray;
};

//console.log(tail([4,5,6]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
let test = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(test, 3);