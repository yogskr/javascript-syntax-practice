'use strict';

// Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

const declineEverything = (arr) => {
  return arr.forEach(politelyDecline);
};

console.log(declineEverything(veggies));

const acceptEverything = (arr) => {
  return arr.forEach((item) => {
    console.log(`Ok, I guess I will eat some ${item}.`);
  });
};

console.log(acceptEverything(veggies));
