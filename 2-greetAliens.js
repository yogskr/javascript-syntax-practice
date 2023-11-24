'use strict';

// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”

const greetAliens = (strArr) => {
  for (let i = 0; i < strArr.length; i++) {
    console.log(
      `Oh powerful ${strArr[i]}, we humans offer our unconditional surrender!`
    );
  }
};

const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];

greetAliens(aliens);
