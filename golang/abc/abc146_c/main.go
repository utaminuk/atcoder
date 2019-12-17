package main

import (
	"fmt"
	"strconv"
)

func price(a, b, num int) int {
	return (a * num) + (b * len(strconv.Itoa(num)))
}

func main() {

	var a, b, x int
	fmt.Scan(&a, &b, &x)

	start := 0
	end := int(1e9) + 1
	center := 0

	for (end - start) > 1 {
		center = (start + end) / 2

		if price(a, b, center) <= x {
			start = center
		} else {
			end = center
		}

	}
	fmt.Printf("%d", start) // startが買える値

}
