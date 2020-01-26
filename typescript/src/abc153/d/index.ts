import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
let h = +input[0];

let count = 0;

while (h > 0) {
  // console.log(`h: ${h}`);
  count++;
  h = Math.floor(h / 2);
}

console.log((2 ** count) - 1);
