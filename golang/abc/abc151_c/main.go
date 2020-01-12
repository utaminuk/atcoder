package main

import (
	"fmt"
)

func main() {

	// 読み込み数取得
	var n, m int
	fmt.Scan(&n, &m)

	answer := 0
	penalty := 0
	a := make([]int, n+1)

	for i := 1; i <= m; i++ {

		id := 0
		result := ""
		fmt.Scan(&id, &result)

		if result == "WA" {
			if a[id] != -1 {
				a[id] = a[id] + 1
			}
		} else {
			if a[id] != -1 {
				answer++
				penalty += a[id]
				a[id] = -1
			}
		}

	}

	fmt.Printf("%d %d", answer, penalty)

}
