# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ngoalvin/lotide`

**Require it:**

`const _ = require('@ngoalvin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: asserts the given parameters using ===
* `assertArraysEqual(actual, expected)`: asserts the given arrays 
* `assertObjectsEqual(actual, expected)`: asserts the given objects 
* `eqArrays(actual, expected)`: checks if the given arrays are the same 
* `eqObjects(actual, expected)`: checks if the given objects are the same
* `countLetters(str)`: counts the amount of letters(a-z,A-Z) are in a string
* `countOnly(allItems, itemsToCount)`: returns an object counting the times an element repeats in allItems
* `findKey(data, callback)`: returns the first key found from the given callback
* `findKeyByValue(object, value)`: returns the key that has the given value
* `flatten(array)`: returns a new unested array from the given array
* `head(array)`: returns the first element of the array
* `tail(array)`: returns a new array without the first element of the given array
* `letterPositions(string)`: returns an object with key as a letter from the string and value of which index it was found
* `map(array, callback)`: takes in an array and returns an new array depending on the callback
* `middle(array)`: returns an array of the middle elements, if length of array < 2 returns []
* `takeUntil(array, callback)`: takes in an array and returns an array up to the point an element meets the callback
* `without(array, itemsToRemove)`: returns a new array without the items in itemsToRemove

