import * as fs from 'fs';

function main(input: string) {


  const lines = input.split("\n");
  const [n, k] = lines[0].split(' ').map((v: string) => +v);

  const h = lines[1].split(' ')
    .map((v: string) => +v)
    .sort((a: number, b: number) => b - a)
    .slice(k);

  console.log(h.reduce((prev: number, current: number) => prev + current, 0));
}

main(fs.readFileSync('/dev/stdin', 'utf8'));

