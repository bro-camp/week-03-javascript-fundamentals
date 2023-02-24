const n = 4;

let k = 1;

for (let i = 1; i <= n; i += 1) {
  let line = '';
  for (let j = 1; j <= i; j += 1) {
    line += `${k} `;
    k += 1;
  }
  console.log(line);
}

console.log('\n\n');
