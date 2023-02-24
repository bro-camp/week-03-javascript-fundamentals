const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter character input:\n', (input) => {
  console.log(`\nThe entered character input is:\n${input}`);
  console.log('\n\n');
  readline.close();
});
