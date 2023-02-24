const readlineSync = require('readline-sync');

const principalAmount = parseFloat(readlineSync.question('Enter the principal amount: '));
const interestRate = parseFloat(readlineSync.question('Enter the interest rate: '));
const numberOfYears = parseFloat(readlineSync.question('Enter the number of years: '));

const simpleInterest = (principalAmount * interestRate * numberOfYears) / 100;

console.log(`Simple interest is ${simpleInterest}\n\n`);
