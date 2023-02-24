const readlineSync = require('readline-sync');

const myString = readlineSync.question('Enter a string:\n');
// const myString = '1234';
// const myString = Number(1234);

try {
  const reversedString = myString.split('').reverse().join('');
  console.log(`\nReversed string is:\n${reversedString}`);
} catch (err) {
  console.log(`\nErr: ${err.message}`);
} finally {
  console.log(`\nType of myString is ${typeof myString}\n\n`);
}
