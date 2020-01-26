import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(/[ \n]/);

const n: number = +input[0];
const k: number = +input[1];

let h: number[] = [];

for (let i = 0; i < n; i++) {
  h[i] = +input[i + 2];
}

h.sort((a, b) => { return (a < b ? 1 : -1); });

let result = 0;
for (let i = k; i < n; i++) {
  result += h[i];
}

console.log(result);

