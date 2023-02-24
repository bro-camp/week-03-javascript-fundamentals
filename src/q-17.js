const readlineSync = require('readline-sync');

class Calculator {
  constructor() {
    /* eslint-disable no-unused-expressions */
    this.num1;
    this.num2;
    this.result;
    /* eslint-enable no-unused-expressions */
  }

  readNumbers() {
    this.num1 = parseInt(readlineSync.question('Enter the first number: '), 10);
    this.num2 = parseInt(readlineSync.question('Enter the second number: '), 10);
  }

  addition() {
    this.result = this.num1 + this.num2;
  }

  subtraction() {
    this.result = this.num1 - this.num2;
  }

  multiplication() {
    this.result = this.num1 * this.num2;
  }

  division() {
    this.result = this.num1 / this.num2;
  }

  getResult() {
    return this.result;
  }
}

const calculator = new Calculator();

let choice;

// eslint-disable-next-line no-constant-condition
while (true) {
  console.log('0. Exit');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  choice = parseInt(readlineSync.question('\nEnter your choice [0-4]: '), 10);
  if (choice === 0) {
    console.log('\n\nExiting...\n\n');
    break;
  }

  if (![1, 2, 3, 4].includes(choice)) {
    console.log('\nEnter a valid number!!!\n\n\n');
    continue; // eslint-disable-line no-continue
  }

  console.log();
  calculator.readNumbers();
  console.log();

  if (choice === 1) {
    calculator.addition();
  } else if (choice === 2) {
    calculator.subtraction();
  } else if (choice === 3) {
    calculator.multiplication();
  } else if (choice === 4) {
    calculator.division();
  }

  console.log(`Result = ${calculator.getResult()}\n\n\n`);
}
