const readlineSync = require('readline-sync');

const number1 = parseInt(readlineSync.question('Enter the first number [int]: '), 10);
const number2 = parseFloat(readlineSync.question('Enter the second number [float]: '));
console.log(`The sum of the numbers is ${number1 + number2}\n\n`);
