import * as fs from "fs";

const split = (str: string): string[] =>
  str.split(" ").map((v: string) => v.trim());
const split_number = (str: string): number[] =>
  split(str).map((v: string) => +v);

export function main(input: string) {
  const lines = input.split("\n");
  const n = lines[0].split('');

  let check = "";
  for (let i = 0; i < n.length; i++) {
    if (i > 0 && n[i] !== check) {
      return "Yes";
    } else {
      check = n[i];
    }
  }

  return "No";
}

if (!process.env.LOCAL_DEBUG) {
  console.log(main(fs.readFileSync("/dev/stdin", "utf8")));
}
