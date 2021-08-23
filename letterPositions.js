const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);

      } else
        results[sentence[i]] = [i];
    }
  }
  return results;
};

//Testing------------------------------------------
const resultsObj = letterPositions("hello");
assertArraysEqual(resultsObj["h"],[0]);
assertArraysEqual(resultsObj["e"],[1]);
assertArraysEqual(resultsObj["l"],[2,3]);
assertArraysEqual(resultsObj["o"],[4]);

//End of Testing ------------------------------------

module.exports = letterPositions;

