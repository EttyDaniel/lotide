const assertEqual = function(actual, expected) {
  if (actual === expected)
    //Passed
    console.log(`🟢 🟢 🟢 Assertion Passed: ${actual} === ${expected}`);
  else {
    //Failed
    console.log(`🔴 🔴 🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;