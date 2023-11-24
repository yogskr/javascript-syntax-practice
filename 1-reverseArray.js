'use strict';

// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

const reverseArray = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.unshift(arr[i]);
  }
  return output;
};

const sentence = ['sense.', 'make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];
