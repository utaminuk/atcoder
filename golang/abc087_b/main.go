package main

import (
	"fmt"
)

func main() {

	// 読み込み数取得
	var (
		coin500 int
		coin100 int
		coin50  int
		sum     int
	)
	fmt.Scan(&coin500, &coin100, &coin50, &sum)

	result := 0
	for a := 0; a <= coin500; a++ {
		for b := 0; b <= coin100; b++ {
			for c := 0; c <= coin50; c++ {
				check_sum := a*500 + b*100 + c*50
				if check_sum == sum {
					result++
				}
			}

		}
	}
	fmt.Printf("%d\n", result) // debug

}
