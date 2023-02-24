const readlineSync = require('readline-sync');

const writtenTest = parseInt(readlineSync.question('Enter the score of written test: '), 10);
const labExam = parseInt(readlineSync.question('Enter the score of lab exam: '), 10);
const assignment = parseInt(readlineSync.question('Enter the score of assignment: '), 10);

const overallGrade = (
  (writtenTest * 70) / 100
  + (labExam * 20) / 100
  + (assignment * 10) / 100
);
console.log(`\nOverall grade is ${overallGrade}\n\n`);
