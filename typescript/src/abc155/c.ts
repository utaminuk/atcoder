import * as fs from "fs";

const split = (str: string): string[] =>
  str.split(" ").map((v: string) => v.trim());
const split_number = (str: string): number[] =>
  split(str).map((v: string) => +v);

export function main(input: string) {
  const lines = input.split("\n");
  const [n] = split_number(lines[0]);
  let S = lines.slice(1);

  let datums: { [keys: string]: number } = {};
  let max = 0;

  for (let i = 0; i < n; i++) {
    datums[S[i]] = (datums[S[i]] || 0) + 1;
    max = max < datums[S[i]] ? datums[S[i]] : max;
  }

  const result = Object.keys(datums)
    .sort()
    .filter(key => datums[key] === max);

  return result.join("\n");
}

if (!process.env.LOCAL_DEBUG) {
  console.log(main(fs.readFileSync("/dev/stdin", "utf8")));
}
