
//const assertEqual = require('../assertEqual');
const head = require('../head');
const assert = require('chai').assert;

describe('#head',() => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 3 for [3,5,7,6]", () => {
    assert.strictEqual(head([3,5,7,6]), 3);
  });

  it("returns Hello for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

});
