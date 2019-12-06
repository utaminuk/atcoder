package main

import (
	"fmt"
)

func main() {

	// インプット数
	var num int
	fmt.Scan(&num)

	// 黒板初期化
	blackboard := make([]int, num)
	for i := 0; i < num; i++ {
		fmt.Scan(&blackboard[i])
	}

	// すべての数の論理和を取る
	// 2で何回割り切れるかは2進数の右何桁かで判断できる
	// つまり全ての数における「最小2で何回割り切れる数」は
	// すべての数を論理和してその数の右側の桁数を数えればよい
	// 参考： https://qiita.com/dev100kg/items/807dbcee9e56523a2c7b
	ad := 0
	for _, x := range blackboard {
		ad = ad | x
	}

	// fmt.Printf("%d\n", ad)

	result := 0
	for ad&1 == 0 {
		ad = ad >> 1
		result++
		// fmt.Printf("%b\n", ad)
	}
	fmt.Println(result)

}
