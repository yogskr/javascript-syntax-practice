'use strict';

// Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

const groceries = (obj) => {
  let listString = '';
  for (let i = 0; i < obj.length; i++) {
    listString += obj[i].item;
    if (i < obj.length - 2) {
      listString += ', ';
    } else if (i == obj.length - 2) {
      listString += ' and ';
    }
  }

  return listString;
};

// console.log(
//   groceries([
//     { item: 'Carrots' },
//     { item: 'Hummus' },
//     { item: 'Pesto' },
//     { item: 'Rigatoni' },
//   ])
// );

// console.log(groceries([{ item: 'Cheese Balls' }]));

// console.log(
//   groceries([{ item: 'Lettuce' }, { item: 'Onions' }, { item: 'Tomatoes' }])
// );

console.log(groceries([{ item: 'Sausage' }, { item: 'Peppers' }]));
