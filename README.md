# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @etty_barone/lotide`

**Require it:**

`const _ = require('@etty_barone/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `assertEqual(actual, expected)` : This function compers two primitive arguments and prints an assertion to the user
* `assertArraysEqual(firstArr, secondArr)`: This function compers between two arrays and prints an assertion to the user
* `assertObjectsEqual(object1, object2)`: This function compers between two objects and prints an assertion to the user
* `eqArrays(firstArray,secondArray)`: This function is being used by assertArraysEqual
* `eqObjects(object1,object2)`: This function is being used by assertObjectsEqual
* `countLetters(sentence)`: This function recieves a sentence and return an object with the number of apperances for each char
* `countOnly(allItems, itemsToCount)`: This function recieves a list of items and a list with items that I want to count and returns the number of apperances for each desired item (second list)
* `findKey(obj, callback)`: This function recieves an object and a callback function and returns the key after sending the object to the callback function
* `findKeyByValue(bjToSearch, valToSearch)`: This function recieves an object and a value to search and returns the key that holds this value
* `flatten(arrayToFlatten)`: This function recieves an array of arrays and returns an array with all the elements in one dimension 
* `head(array)`: This function recieves an array and returns the first element 
* `letterPositions(sentence)`: This function recieves a string and returns an object with all the positions of the characters
* `map(array, callback)`: This function recieves an array and a callback function and returns the results of the callback function for each itam in the array 
* `middle(array)`: This function recieves an array and returns the middle element/s of it
* `tail(array)`: This function recieves an array and returns the last element of it
* `takeUntil(array, callback)`: This function recieves an array and a callback function and returns all items until the callback returns false
* `without(source,itemsToRemove)`: This function recieves an array and an item to remove from it and returns the a copy of the array without the itemsToRemove
* `min(array)`: This function recieves an array and returns the array without the first element 