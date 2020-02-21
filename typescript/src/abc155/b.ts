import * as fs from "fs";

const split = (str: string): string[] =>
  str.split(" ").map((v: string) => v.trim());
const split_number = (str: string): number[] =>
  split(str).map((v: string) => +v);

export function main(input: string) {
  const lines = input.split("\n");
  const [n] = split_number(lines[0]);
  const A = split_number(lines[1]);

  const before = A.filter(n => n % 2 === 0);
  const after = before.filter(n => n % 3 === 0 || n % 5 === 0);

  return before.length === after.length ? "APPROVED" : "DENIED";
}

if (!process.env.LOCAL_DEBUG) {
  console.log(main(fs.readFileSync("/dev/stdin", "utf8")));
}
