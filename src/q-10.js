const readlineSync = require('readline-sync');

const array1 = [];
const array2 = [];

const size = parseInt(readlineSync.question('Enter the size of the arrays: '), 10);

console.log('\nEnter the values of array 1:');
for (let i = 0; i < size; i += 1) {
  array1.push(parseInt(readlineSync.question(''), 10));
}

console.log('\nEnter the values of array 2:');
for (let i = 0; i < size; i += 1) {
  array2.push(parseInt(readlineSync.question(''), 10));
}

// Swapping
for (let i = 0; i < size; i += 1) {
  const temp = array1[i];
  array1[i] = array2[i];
  array2[i] = temp;
}

console.log('\nArray after swapping: ');
console.log(`\nArray 1: ${array1}`);
console.log(`\nArray 2: ${array2}`);

console.log('\n\n');
