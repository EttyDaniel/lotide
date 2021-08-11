const tail = require('../tail');
const assert = require('chai').assert;

//Test

describe('#tail',() => {
  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail(["1"]),[]);
  });
});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// let test = tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);
// assertEqual(test[0],"Lighthouse");
// assertEqual(test[1],"Labs");