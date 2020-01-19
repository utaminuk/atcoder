import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(/[ \n]/);
const a: string = input[0];
const b: string = input[1];

let ansA: string = '';
let ansB: string = '';

for (let i = 0; i < +b; i++) {
  ansA += a;
}
for (let i = 0; i < +a; i++) {
  ansB += b;
}

let list = [ansA, ansB];
list.sort();

if (list[0] == ansA) {
  console.log(+ansA);
} else {
  console.log(+ansB);
}
