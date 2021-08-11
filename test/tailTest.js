const assertEqual = require('../assertEqual');
const tail = require('../tail');

//Test
const words = ["Yo Yo", "Lighthouse", "Labs"];
let test = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(test[0],"Lighthouse");
assertEqual(test[1],"Labs");