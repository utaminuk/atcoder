package main

import (
	"fmt"
)

const (
	A uint = 10 // 1010
	B uint = 12 // 1100
)

func main() {

	var bits uint
	fmt.Println("-----------")

	// AND演算
	bits = A & B
	fmt.Printf(" A:  %b\n B:  %b\nbit: %04b\n", A, B, bits) // 1000
	fmt.Println("-----------")

	// OR演算
	bits = A | B
	fmt.Printf(" A:  %b\n B:  %b\nbit: %04b\n", A, B, bits) // 1110
	fmt.Println("-----------")

	// XOR演算
	bits = A ^ B
	fmt.Printf(" A:  %b\n B:  %b\nbit: %04b\n", A, B, bits) // 0110
	fmt.Println("-----------")

	// ビットシフト
	bits = 1 << uint64(3)           // 2の3乗かかる 2*2*2 = 8 = 1000
	fmt.Printf("bit: %04b\n", bits) // 1000
	fmt.Println("-----------")

	// 逆ビットシフト
	bits = 8 >> uint64(3)           // -(2の3乗)かかる 2*2*2 = 8 = -1000
	fmt.Printf("bit: %04b\n", bits) // 0001
	fmt.Println("-----------")

}
