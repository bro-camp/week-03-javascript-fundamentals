const readlineSync = require('readline-sync');

const mark = parseFloat(readlineSync.question('Enter the mark: '));

if (mark >= 50) {
  console.log('\n\nPassed\n\n');
} else {
  console.log('\n\nFailed\n\n');
}
