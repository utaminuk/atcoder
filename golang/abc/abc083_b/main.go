package main

import (
	"fmt"
)

func sumDigit(num int) int {
	var result int = 0
	for num > 0 {
		result += num % 10
		num = (num - (num % 10)) / 10
	}

	return result
}

func main() {

	// 読み込み数取得
	var (
		n int
		a int
		b int
	)
	fmt.Scan(&n, &a, &b)

	var result int = 0
	var sum int = 0
	for i := 1; i <= n; i++ {
		sum = sumDigit(i)
		if a <= sum && sum <= b {
			result += i
		}

	}

	fmt.Printf("%d\n", result) // debug

}
