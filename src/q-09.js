const n = 5;

for (let i = 1; i <= n; i += 1) {
  let line = '';
  for (let j = 1; j <= i; j += 1) {
    line += `${j} `;
  }
  console.log(line);
}

console.log('\n');
