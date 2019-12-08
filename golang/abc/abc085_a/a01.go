package main

import (
	"fmt"
)

func main() {

	var (
		a, b, c int
		s       string
	)

	fmt.Scan(&a, &b, &c, &s)
	fmt.Printf("%d %s\n", a+b+c, s)
}
