
const middle = require("../middle");
const assert = require('chai').assert;

//TEST

describe('#middle', () => {
  it("returns [2,3] for [1,2,3,3]", () => {
    assert.deepEqual(middle([1,2,3,3]),[2,3]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });

  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]),[]);
  });

  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });

  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });
  //

  it("returns [name] for [hello,my,name,is,bob]", () => {
    assert.deepEqual(middle(["hello","my","name","id","bob"]),["name"]);
  });
  
});