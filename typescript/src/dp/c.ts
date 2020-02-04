// https://atcoder.jp/contests/dp/tasks/dp_b

import * as fs from "fs";

const split = (str: string): string[] =>
  str.split(" ").map((v: string) => v.trim());
const split_number = (str: string): number[] =>
  split(str).map((v: string) => +v);

export function main(input: string) {
  const lines = input.split("\n");
  const [n] = split_number(lines[0]);

  // Playの初期化
  let play: number[][] = [];
  for (let i = 0; i < n; i++) {
    play[i] = split_number(lines[i + 1]);
  }

  // DP値の初期化
  // dp値の一番スタートである0として使うので一つ多い添字を作る
  let dp: number[][] = [];
  for (let i = 0; i < n + 1; i++) {
    dp[i] = [0, 0, 0];
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (j != k) {
          dp[i + 1][k] = Math.max(dp[i + 1][k], dp[i][j] + play[i][k]);
        }
      }
    }
  }

  return Math.max(...dp[n]);
}

if (!process.env.LOCAL_DEBUG) {
  console.log(main(fs.readFileSync("/dev/stdin", "utf8")));
}
