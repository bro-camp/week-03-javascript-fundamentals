const readlineSync = require('readline-sync');

function getArray(size) {
  const array = [];
  for (let i = 0; i < size; i += 1) {
    array.push(parseInt(readlineSync.question(''), 10));
  }
  return array;
}

function displayArray(array) {
  const size = array.length;
  let line = '[ ';
  for (let i = 0; i < size; i += 1) {
    line += array[i];

    if (i !== size - 1) line += ', ';
    else line += ' ]\n\n';
  }
  console.log(line);
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
