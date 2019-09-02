package main

import (
	"fmt"
	"sort"
)

func main() {

	// 読み込み数取得
	var num int
	fmt.Scan(&num)

	// 入力リスト初期化
	inputs := make([]int, num)
	for i := 0; i < num; i++ {
		fmt.Scan(&inputs[i])
	}
	// 逆順にソート
	sort.Sort(sort.Reverse(sort.IntSlice(inputs)))

	alice := 0
	bob := 0

	for i, v := range inputs {
		if i%2 == 0 {
			alice += v
		} else {
			bob += v
		}
	}

	fmt.Printf("%d\n", (alice - bob))

}
