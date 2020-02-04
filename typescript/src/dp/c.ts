// https://atcoder.jp/contests/dp/tasks/dp_b

import * as fs from "fs";

const split = (str: string): string[] =>
  str.split(" ").map((v: string) => v.trim());
const split_number = (str: string): number[] =>
  split(str).map((v: string) => +v);

type PlayType = { a: number; b: number; c: number }[];

export function main(input: string) {
  const lines = input.split("\n");
  const [n] = split_number(lines[0]);

  // Playの初期化
  let play: PlayType = [];
  for (let i = 0; i < n; i++) {
    const [a, b, c] = split_number(lines[i + 1]);
    play[i] = { a, b, c };
  }

  // DP値の初期化
  let dp: { cost: number; selected: string[] }[] = [];
  for (let i = 0; i < n; i++) {
    dp[i] = { cost: Infinity, selected: [] };
  }

  console.log(dp);

  let costs = [];
  for (let i = 0; i < n; i++) {
    costs = [];
    if (dp[i].selected != "A") {
    }
    dp[i].cost = Math.min();
  }

  return dp[n - 1];
}

if (!process.env.LOCAL_DEBUG) {
  console.log(main(fs.readFileSync("/dev/stdin", "utf8")));
}
