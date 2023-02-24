const readlineSync = require('readline-sync');

const size = parseInt(readlineSync.question('Enter the size of the arrays: '), 10);
const array1 = [];
const array2 = [];
const sumArray = [];

console.log('\nEnter the values of array1: ');
for (let i = 0; i < size; i += 1) {
  const ar = [];
  for (let j = 0; j < size; j += 1) {
    ar.push(parseInt(readlineSync.question(''), 10));
  }
  array1.push(ar);
}

console.log('\nEnter the values of array2: ');
for (let i = 0; i < size; i += 1) {
  const ar = [];
  for (let j = 0; j < size; j += 1) {
    ar.push(parseInt(readlineSync.question(''), 10));
  }
  array2.push(ar);
}

for (let i = 0; i < size; i += 1) {
  const ar = [];
  for (let j = 0; j < size; j += 1) {
    ar.push(array1[i][j] + array2[i][j]);
  }
  sumArray.push(ar);
}

console.log('Sum of two arrays is:');
console.log('[');
for (let i = 0; i < size; i += 1) {
  let line = '  [ ';
  for (let j = 0; j < size; j += 1) {
    line += sumArray[i][j];

    if (j !== size - 1) line += ', ';
    else line += ' ],';
  }
  console.log(line);
}
console.log(']\n\n');
