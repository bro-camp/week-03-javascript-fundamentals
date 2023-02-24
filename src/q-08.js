const readlineSync = require('readline-sync');

const input = parseInt(readlineSync.question('Enter a number: '), 10);

let sum = 0;

for (let i = 1; i <= input; i += 1) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

console.log(`\nSum of all odd numbers = ${sum}\n\n`);
