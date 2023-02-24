const readlineSync = require('readline-sync');

const size = parseInt(readlineSync.question('Enter the size of the array: '), 10);
const array = [];

console.log('\nEnter the values of array: ');
for (let i = 0; i < size; i += 1) {
  array.push(parseInt(readlineSync.question(''), 10));
}

let evenCount = 0;
for (let i = 0; i < size; i += 1) {
  if (array[i] % 2 === 0) {
    evenCount += 1;
  }
}

console.log(`\nNumber of even numbers in the given array is ${evenCount}\n\n`);
