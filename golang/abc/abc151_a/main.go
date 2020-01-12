package main

import (
	"fmt"
)

func main() {

	// 読み込み数取得
	var c []byte
	fmt.Scan(&c)

	fmt.Printf("%s\n", string(c[0]+1))

}
