package main

import (
	"fmt"
)

// 正直者チェック
func honest(number uint, digit uint) uint {
	return (number >> digit) & 1
}

// 正直者カウント
func honetsNum(n uint) uint {
	result := uint(0)
	for i := 0; n > 0; i++ {
		// 末尾が1 だったらresultに1追加する
		if n&1 == 1 {
			result++
		}
		n >>= 1 // 一桁ずらす
	}
	return result
}

func main() {

	// 読み込み数取得
	var count uint
	fmt.Scan(&count)

	comments := make([]uint, count)
	members := make([][]uint, count)
	types := make([][]uint, count)

	// ユーザーデータ作成
	for i := uint(0); i < count; i++ {
		fmt.Scan(&comments[i])
		members[i] = make([]uint, comments[i])
		types[i] = make([]uint, comments[i])

		for j := uint(0); j < comments[i]; j++ {
			fmt.Scan(&members[i][j], &types[i][j])
			members[i][j]-- // メンバーIDは-1してラベルと同じにする
		}
	}

	// bit全探索
	// 2進数を左にSビット論理シフトすると、2^S倍することに相当
	// 2 ^ ユーザー数 を計算して2bit的に全パターンを取得している
	max_loop := uint(1) << count
	// answer := uint(0)

	for i := uint(0); i < max_loop; i++ {

		ok := true

		// ユーザー数分ループする
		for j := uint(0); j < count; j++ {
			if honest(i, j) == 0 {
				continue
			}
			fmt.Printf("i: %d | j: %d\n", i, j)

			for k := uint(0); k < comments[j]; k++ {
				if honest(i, uint(members[j][k])) != types[j][k] {
					ok = false
					break
				}
			}
			if !ok {
				break
			}
		}
	}

	// fmt.Printf("%d", result)

}
