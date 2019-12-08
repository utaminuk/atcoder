package main

import (
	"fmt"
)

func main() {

	// 読み込み数取得
	var num int
	fmt.Scan(&num)

	// 黒板初期化
	blackboard := make([]int, num)
	for i := 0; i < num; i++ {
		fmt.Scan(&blackboard[i])
	}
	result := 0
	allBreak := true

	for allBreak {
		for i := 0; i < num; i++ {
			blackboard[i] /= 2
			if (blackboard[i] % 2) != 0 {
				if result != 0 {
					result++
				}
				allBreak = false
				break
			}
		}
		if allBreak == false {
			break
		} else {
			result++
		}
	}
	fmt.Printf("%d\n", result) // debug

}
