const readlineSync = require('readline-sync');

const input = readlineSync.question('Enter a string:\n');

let flag = 1;

for (let i = 0, j = input.length - 1; i < j; i += 1, j -= 1) {
  if (input.charAt(i) !== input.charAt(j)) {
    flag = 0;
    break;
  }
}

if (flag) {
  console.log('\nEntered string is a palindrome\n\n');
} else {
  console.log('\nEntered string is NOT a palindrome\n\n');
}
