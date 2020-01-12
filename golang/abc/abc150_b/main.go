package main

import (
	"fmt"
)

func main() {

	// 読み込み数取得
	var n int
	var s string
	fmt.Scan(&n, &s)

	count := 0

	for i := 0; i < (n - 2); i++ {
		if s[i:(i+3)] == "ABC" {
			count++
		}
	}
	fmt.Printf("%d\n", count)

}
