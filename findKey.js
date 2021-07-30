const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`👍🏼 Assertion Passed: ${actual} === ${expected}`);
  else {
    console.log(`👎🏼 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj,callback) {
  for (let k in obj) {
    if (callback(obj[k]))
      return k;
  }
  return undefined;
};

const firstTry = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(firstTry,"noma");

const secondTry = findKey({
  A: "blue",
  B: "pink",
  C: "purple",
  D: "green",
  E: "yellow",
  F: "red"
}, y => y === "green");
assertEqual(secondTry,"D");


