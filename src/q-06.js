const readlineSync = require('readline-sync');

const input = parseInt(readlineSync.question('Enter a number [1-7]: '), 10);

switch (input) {
  case 1:
    console.log('\n\nSunday\n\n');
    break;
  case 2:
    console.log('\n\nMonday\n\n');
    break;
  case 3:
    console.log('\n\nTuesday\n\n');
    break;
  case 4:
    console.log('\n\nWednesday\n\n');
    break;
  case 5:
    console.log('\n\nThursday\n\n');
    break;
  case 6:
    console.log('\n\nFriday\n\n');
    break;
  case 7:
    console.log('\n\nSaturday\n\n');
    break;
  default:
    console.log('\n\nInvalid Entry\n\n');
}
