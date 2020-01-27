import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(/[ \n]/);
const h = +input[0];
const a = +input[1];

console.log(Math.ceil(h / a));
// 切り捨ては
// (h + (a - 1)) / a
