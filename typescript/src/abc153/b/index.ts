import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(/[ \n]/);
const h: number = +input[0];
const n: number = +input[1];

let a: number[] = [];

for (let i = 0; i < n; i++) {
  a[i] = +input[i + 2];
}

const result = a.reduce((prev, current) => prev + current, 0)

console.log((result >= h) ? 'Yes' : 'No');


