const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

//TEST

assertArraysEqual(middle([1,2,3,3]),[2,3]);//should return true

assertArraysEqual(middle([1]),[]);//should return true


assertArraysEqual(middle([1,2]),[]);//should return true

assertArraysEqual(middle([1, 2, 3]),[2]);//should return true

assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);//should return true

assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);//should return true

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);//should return true

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3]);//should return false