package main

import (
	"fmt"
)

func main() {

	// 読み込み数取得
	var day string
	fmt.Scan(&day)

	// 曜日データ取得
	days := [...]string{"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"}

	for i, checkDay := range days {
		if checkDay == day {
			fmt.Printf("%d", 7-i)
		}

	}

}
