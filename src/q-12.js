const readlineSync = require('readline-sync');

const size = parseInt(readlineSync.question('Enter the size of the array: '), 10);
const array = [];

console.log('\nEnter the values of array: ');
for (let i = 0; i < size; i += 1) {
  array.push(parseInt(readlineSync.question(''), 10));
}

// Sorting
for (let i = 0; i < size; i += 1) {
  let p = i;
  for (let j = i; j < size; j += 1) {
    if (array[j] > array[p]) p = j;
  }
  const temp = array[i];
  array[i] = array[p];
  array[p] = temp;
}

console.log(`\nSorted array:\n${array}\n\n`);
