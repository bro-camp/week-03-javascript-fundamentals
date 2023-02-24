const readlineSync = require('readline-sync');

const input = parseInt(readlineSync.question('Enter a number: '), 10);

for (let i = 1; i <= 10; i += 1) {
  console.log(`\n${i} x ${input} = ${i * input}`);
}

console.log('\n\n');
