package main

import (
	"fmt"
)

func main() {

	// 入力リスト初期化
	inputs := make([]int, 3)
	for i := 0; i < 3; i++ {
		fmt.Scan(&inputs[i])
	}

	result := 0
	for _, v := range inputs {
		result += v
	}

	if result <= 21 {
		fmt.Printf("win")
	} else {
		fmt.Printf("bust")
	}

}
