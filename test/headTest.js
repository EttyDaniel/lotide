const head = require('./head');
const assertEqual = require('./assertEual');

//Test
assertEqual(head([]), 5);
assertEqual(head([4]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");