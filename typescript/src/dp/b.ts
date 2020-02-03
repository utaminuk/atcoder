// https://atcoder.jp/contests/dp/tasks/dp_b

import * as fs from "fs";

const split = (str: string): string[] => {
  return str.split(" ").map((v: string) => v.trim());
};
const split_number = (str: string): number[] => {
  return split(str).map((v: string) => +v);
};

export function main(input: string) {
  const lines = input.split("\n");
  const [n] = split_number(lines[0]);

  const h: number[] = split_number(lines[1]);
  let dp: number[] = new Array(n).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    if (i >= 2) {
      dp[i] = Math.min(dp[i], dp[i - 2] + Math.abs(h[i] - h[i - 2]));
    }
    if (i >= 1) {
      dp[i] = Math.min(dp[i], dp[i - 1] + Math.abs(h[i] - h[i - 1]));
    }
  }

  return dp[n - 1];
}

if (!process.env.LOCAL_DEBUG) {
  console.log(main(fs.readFileSync("/dev/stdin", "utf8")));
}
