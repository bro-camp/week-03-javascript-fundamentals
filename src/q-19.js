const readlineSync = require('readline-sync');

const income = parseFloat(readlineSync.question('Enter the annual income: '));

let taxPercentage;

if (income <= 2_50_000) {
  taxPercentage = 0;
} else if (income > 2_50_000 && income <= 5_00_000) {
  taxPercentage = 5;
} else if (income > 5_00_000 && income <= 10_00_000) {
  taxPercentage = 20;
} else if (income > 10_00_000 & income <= 50_00_000) {
  taxPercentage = 30;
}

const tax = (taxPercentage * income) / 100;

console.log(`Income tax amount = ${tax}\n\n`);
