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
  const size = parseInt(readlineSync.question('Enter the size of the array: '), 10);

  console.log('\nEnter the values of the array: ');
  const array = getArray(size);

  console.log('\nThe values in the array are: ');
  displayArray(array);

  console.log('\n');
}

main();
