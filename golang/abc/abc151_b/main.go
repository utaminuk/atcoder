package main

import (
	"fmt"
)

func main() {

	// 読み込み数取得
	var n, k, m int
	fmt.Scan(&n, &k, &m)

	a := make([]int, n-1)
	for i := 0; i < (n - 1); i++ {
		fmt.Scan(&a[i])
	}

	actual := m * n
	expected := 0

	for i := 0; i < (n - 1); i++ {
		expected += a[i]
	}

	if result := actual - expected; result > k {
		fmt.Printf("-1")
	} else {
		if result < 0 {
			fmt.Printf("0")
		} else {
			fmt.Printf("%d", result)
		}
	}

}
