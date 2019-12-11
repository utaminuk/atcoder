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

	fmt.Println(members)
	fmt.Println(types)

	// 全探索
	iMax := 1 << count
	fmt.Println(iMax)

	// fmt.Printf("%d", result)

}
