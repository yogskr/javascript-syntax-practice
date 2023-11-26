'use strict';

// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

// Do not use the .map() method.

const convertToBaby = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(`baby ${arr[i]}`);
  }
  return result;
};

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));
