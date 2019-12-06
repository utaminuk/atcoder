package main

import (
	"fmt"
)

func main() {

	fmt.Printf("\n==========\n")

	// 読み込み数取得
	var num int
	fmt.Scan(&num)

	// 入力リスト初期化
	inputs := make([]int, num)
	for i := 0; i < num; i++ {
		fmt.Scan(&inputs[i])
	}

	fmt.Printf("要素数: %d\n", num)
	fmt.Println("----------")

	for _, v := range inputs {
		fmt.Printf("%d\n", v)
	}

	fmt.Printf("\n==========\n")

}
