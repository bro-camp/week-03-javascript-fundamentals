const readlineSync = require('readline-sync');

const size = parseInt(readlineSync.question('Enter the size of the array: '), 10);
const array = [];

console.log('\nEnter the values of array: ');
for (let i = 0; i < size; i += 1) {
  array.push(parseInt(readlineSync.question(''), 10));
}

// Multiply adjacent values
const resultArray = [];
for (let i = 0, n = size - 1; i < n; i += 1) {
  resultArray.push(array[i] * array[i + 1]);
}

console.log(`\nOutput array: ${resultArray}`);
