import * as fs from 'fs';

// 個数制限なし ナップザック問題
// dp[i+1][j+KAi] = min( dp[i+1][j+KAi], dp[i][j] + KBi)
type Magic = {
  a: number;
  b: number;
};

function main(input: string) {

  const lines = input.split("\n");
  let [h, n] = lines[0].split(' ').map((v: string) => +v);
  let magic: Magic[] = [];

  for (let i = 0; i < n; i++) {
    const [a, b] = lines[i + 1].split(' ').map((v: string) => +v);
    magic[i] = { a, b }
  }


  const sorter = (magic: Magic[], h: number): Magic[] => {
    return magic.sort((a, b) => {
      const aH = (h > a.a) ? a.a : h;
      const bH = (h > b.a) ? b.a : h;
      return ((aH / a.b) > (bH / b.b)) ? -1 : 1;
    });
  };

  let result = 0;
  while (h > 0) {
    magic = sorter(magic, h);
    console.log(magic[0]);
    console.log(h);
    h -= magic[0].a;
    result += magic[0].b;
  }

  console.log(result);


}

main(fs.readFileSync('/dev/stdin', 'utf8'));

