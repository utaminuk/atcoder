import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(/[ \n]/);
const n = +input[0];
const m = +input[1];

if (n === m) {
  console.log('Yes');
} else {
  console.log('No');
}
