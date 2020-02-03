// https://atcoder.jp/contests/dp/tasks/dp_a

import * as fs from "fs";

const split_number = (str: string): number[] => {
  return str.split(" ").map((v: string) => +v);
};

function main(input: string) {
  const lines = input.split("\n");
  const [n] = split_number(lines[0]);

  const h: number[] = split_number(lines[1]);

  const result = h.reduce((dp: number, bar: number, i: number) => {
    return dp + bar;
  }, 0);

  console.log(result);
}

main(fs.readFileSync("/dev/stdin", "utf8"));
