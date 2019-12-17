package main

import (
	"fmt"
)

func main() {

	var gap int
	var strs string
	fmt.Scan(&gap, &strs)

	result := make([]rune, len(strs))

	for i, str := range strs {
		s := int(str)
		if s+gap <= 'Z' {
			result[i] = rune(s + gap)
		} else {
			result[i] = 'A' + rune(s+gap-'Z'-1)
		}
	}

	fmt.Printf("%s", string(result))

}
