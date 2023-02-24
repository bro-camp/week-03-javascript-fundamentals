const readlineSync = require('readline-sync');

const n = parseInt(readlineSync.question('Enter a number: '), 10);

/* eslint-disable no-cond-assign */
let f = 1;
for (
  let i = 2;
  (f = n >= 2) && (i <= Math.floor(Math.sqrt(n))) && (f = n % i);
  i += 1, f = 1
);
/* eslint-enable no-cond-assign */

if (f) console.log('\nEntered number is a prime number\n\n');
else console.log('\nEntered number is NOT a prime number\n\n');
