'use strict';

// Write a function factorial() that takes a number as an argument and returns the factorial (https://en.wikipedia.org/wiki/Factorial) of the number.

const factorial = (num) => {
  let factorNums = [];
  // loop through the number in reverse
  for (let i = num; i > 0; i--) {
    factorNums.push(i); // add the iterated numbers into an array
  }
  // multiply the numbers inside the array
  const result = factorNums.reduce((a, b) => a * b, 1);
  return result;
};

console.log(factorial(0));
