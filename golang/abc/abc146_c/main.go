package main

import (
	"fmt"
	"math"
	"strconv"
)

func price(a, b, num uint) uint {
	d := uint(len(strconv.Itoa(int(num))))
	return a*num + b*d
}

func main() {

	var a uint
	var b uint
	var x float64
	fmt.Scan(&a, &b, &x)

	start := uint(0)
	current := uint(math.Pow(10.0, x))
	for {
		current = (current - start) / 2

		if uint(x) > price(a, b, current) {
			// 買えた場合
			start = current
		} else {
			// 買えなかった場合
			current /= 2
		}

		fmt.Printf("start: %d, current: %d\n", start, current)
		if start == current {
			break
		}
	}
	fmt.Printf("%d %d %d\n", a, b, current)

}
