const readlineSync = require('readline-sync');

function getArray(size) {
  const array = [];
  for (let i = 0; i < size; i += 1) {
    const ar = [];
    for (let j = 0; j < size; j += 1) {
      ar.push(parseInt(readlineSync.question(''), 10));
    }
    array.push(ar);
  }
  return array;
}

function addArray(array1, array2) {
  const array = [];
  const size = array1.length;
  for (let i = 0; i < size; i += 1) {
    const ar = [];
    for (let j = 0; j < size; j += 1) {
      ar.push(array1[i][j] + array2[i][j]);
    }
    array.push(ar);
  }
  return array;
}

function displayArray(array) {
  const size = array.length;
  console.log('[');
  for (let i = 0; i < size; i += 1) {
    let line = '  [ ';
    for (let j = 0; j < size; j += 1) {
      line += array[i][j];

      if (j !== size - 1) line += ', ';
      else line += ' ],';
    }
    console.log(line);
  }
  console.log(']\n\n');
}

function main() {
  const size = parseInt(readlineSync.question('Enter the size of the arrays: '), 10);

  console.log('\nEnter the values of array 1: ');
  const array1 = getArray(size);

  console.log('\nEnter the values of array 2: ');
  const array2 = getArray(size);

  const resultArray = addArray(array1, array2);

  console.log('\nThe values in the result array are: ');
  displayArray(resultArray);

  console.log('\n');
}

main();
