const readlineSync = require('readline-sync');

class Obj {
  constructor() {
    this.array = [];
  }

  getArray(size) {
    for (let i = 0; i < size; i += 1) {
      const ar = [];
      for (let j = 0; j < size; j += 1) {
        ar.push(parseInt(readlineSync.question(''), 10));
      }
      this.array.push(ar);
    }
  }

  displayArray() {
    const size = this.array.length;
    console.log('[');
    for (let i = 0; i < size; i += 1) {
      let line = '  [ ';
      for (let j = 0; j < size; j += 1) {
        line += this.array[i][j];

        if (j !== size - 1) line += ', ';
        else line += ' ],';
      }
      console.log(line);
    }
    console.log(']\n\n');
  }
}

function main() {
  const size = parseInt(readlineSync.question('Enter the size of the arrays: '), 10);

  const obj = new Obj();

  console.log('\nEnter the values of the array: ');
  obj.getArray(size);

  console.log('\nThe values in the array are: ');
  obj.displayArray();

  console.log('\n');
}

main();
