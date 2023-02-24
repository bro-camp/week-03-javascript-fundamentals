const readlineSync = require('readline-sync');

const totalMark = parseFloat(readlineSync.question('Enter the mark percentage: '));

if (totalMark >= 90) {
  console.log('\n\nA\n\n');
} else if (totalMark >= 80 && totalMark <= 89) {
  console.log('\n\nB\n\n');
} else if (totalMark >= 70 && totalMark <= 79) {
  console.log('\n\nC\n\n');
} else if (totalMark >= 60 && totalMark <= 69) {
  console.log('\n\nD\n\n');
} else if (totalMark >= 50 && totalMark <= 59) {
  console.log('\n\nE\n\n');
} else {
  console.log('\n\nFailed\n\n');
}
