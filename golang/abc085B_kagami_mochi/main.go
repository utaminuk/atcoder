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
	sort.Sort(sort.IntSlice(inputs))

	steps := 0
	current := 0

	for _, v := range inputs {
		if v > current {
			current = v
			steps++
		}
	}

	fmt.Printf("%d\n", steps)

}
