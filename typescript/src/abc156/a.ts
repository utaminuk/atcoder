import * as fs from "fs";

const split = (str: string): string[] =>
  str.split(" ").map((v: string) => v.trim());
const split_number = (str: string): number[] =>
  split(str).map((v: string) => +v);

export function main(input: string) {
  const lines = input.split("\n");
  const [n, r] = split_number(lines[0]);

  if (n >= 10) {
    return r;
  } else {
    return r + (100 * (10 - n));
  }
}

if (!process.env.LOCAL_DEBUG) {
  console.log(main(fs.readFileSync("/dev/stdin", "utf8")));
}
