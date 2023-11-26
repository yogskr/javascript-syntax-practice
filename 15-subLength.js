'use strict';

// Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

const subLength = (str, char) => {
  let count = 0;
  let charFound = [];
  let arr = str.split('');

  // search and store the 2 occurencess of the character in the charFound variable
  for (let i = 0; i < str.length; i++) {
    if (arr[i] === char) {
      charFound.push(i);
      count++;
    }
  }

  // count the length between the 2 occurences of the character, including the 2 characters
  let result = arr.slice(charFound[0], charFound[1]).length + 1;
  if (count > 2 || count < 2) return 0;
  return result;
};

console.log(subLength('Saturday', 'a'));
