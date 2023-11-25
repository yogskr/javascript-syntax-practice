'use strict';

// Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

// My solution
const sortYears = (arr) => {
  arr.sort();
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.unshift(arr[i]);
  }
  return output;
};

// Codecademy solution
const sortYears2 = (arr) => arr.sort((x, y) => y - x);

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears2(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
