const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`👍🏼 Assertion Passed: ${actual} === ${expected}`);
  else {
    console.log(`👎🏼 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let lettersCount = {};
  for (let c in sentence) {
    if (sentence[c] !== " ") {
      //console.log(sentence[c]);
      if (lettersCount[sentence[c]])
        lettersCount[sentence[c]] += 1;
      else
        lettersCount[sentence[c]] = 1;
    }
  }
  return lettersCount;
};

const myString = "hello Etty";
let myStringCount = countLetters(myString);
console.log(myStringCount);
assertEqual(myStringCount["l"],2);
assertEqual(myStringCount[" "],undefined);
assertEqual(myStringCount["e"],1);
assertEqual(myStringCount["E"],1);


module.exports = countLetters;