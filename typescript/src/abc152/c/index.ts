import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(/[ \n]/);

const n = +input[0];

let count = 0;
let min = +input[1];

input.slice(1, n + 1).map(i => {
  if (+i <= min) {
    min = +i;
    count++;
  }
});

console.log(count);

// function Main(input: string) {
//   const lines = input.split('\n');
//   const ps = lines[1].split(' ').map(v => +v);
//   let count = 0;
//   let min = ps[0];

//   for (let i = 0; i < ps.length; i++) {
//     if (ps[i] <= min) {
//       count++;
//       min = ps[i];
//     }
//   }

//   console.log(count);
// }

// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
