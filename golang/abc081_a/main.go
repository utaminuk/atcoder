package main

import (
	"fmt"
	"strconv"
)

func main() {

	var (
		input string
	)

	fmt.Scan(&input)

	s1, _ := strconv.Atoi(input[0:1])
	s2, _ := strconv.Atoi(input[1:2])
	s3, _ := strconv.Atoi(input[2:3])

	result := 0
	if s1 == 1 {
		result++
	}
	if s2 == 1 {
		result++
	}
	if s3 == 1 {
		result++
	}

	fmt.Printf("%d\n", result)

}
