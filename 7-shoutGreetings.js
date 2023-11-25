'use strict';

// Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

const shoutGreetings2 = (strArr) => {
  let result = [];
  strArr.forEach((str) => {
    result.push(`${str.toUpperCase()}!`);
  });
  return result;
};

const shoutGreetings = (arr) => arr.map((word) => `${word.toUpperCase()}!`);

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
