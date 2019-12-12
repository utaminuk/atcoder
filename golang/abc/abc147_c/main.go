package main

import (
	"fmt"
)

func main() {

	// 読み込み数取得
	var count uint
	fmt.Scan(&count)

	comments := make([]uint, count)
	members := make([][]uint, count)
	types := make([][]uint, count)

	// ユーザーデータ作成
	for i := uint(0); i < count; i++ {
		fmt.Scan(&comments[i])
		members[i] = make([]uint, comments[i])
		types[i] = make([]uint, comments[i])

		for j := uint(0); j < comments[i]; j++ {
			fmt.Scan(&members[i][j], &types[i][j])
			members[i][j]-- // メンバーIDは-1してラベルと同じにする
		}
		fmt.Printf("%d: %d\n", i, comments[i])
	}

	// bit全探索
	// 2進数を左にSビット論理シフトすると、2^S倍することに相当
	// 2 ^ ユーザー数 を計算して2bit的に全パターンを取得している
	max_loop := 1 << count
	for i := 0; i < max_loop; i++ {
		// ok := true

		// ユーザー数分ループする
		for j := uint(0); j < count; j++ {
			fmt.Printf("i: %d | j: %d\n", i, j)

		}
	}

	// fmt.Printf("%d", result)

}
