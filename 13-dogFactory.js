'use strict';

// Step 1: Write a function, dogFactory(). It should:

// 1. have 3 parameters: name, breed, and weight (in that order)
// 2. expect name and breed to be strings
// 3. expect weight to be a number
// 4. return an object
// 5. have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

// Step 2: Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

// Step 3: Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.

const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return `ruff! ruff!`;
    },
    eatTooManyTreats() {
      this._weight++;
    },
  };
};
