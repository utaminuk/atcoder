import * as fs from "fs";

const split = (str: string): string[] =>
  str.split(" ").map((v: string) => v.trim());
const split_number = (str: string): number[] =>
  split(str).map((v: string) => +v);

export function main(input: string) {
  const lines = input.split("\n");
  const n = split_number(lines[0]);

  n.sort();

  if (n[0] === n[1] && n[1] === n[2]) {
    return "No";
  } else if (n[0] === n[1] || n[1] === n[2]) {
    return "Yes";
  } else {
    return "No";
  }
}

if (!process.env.LOCAL_DEBUG) {
  console.log(main(fs.readFileSync("/dev/stdin", "utf8")));
}
