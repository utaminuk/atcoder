package main

import (
	"fmt"
)

// 議員二人 member1, member2 がパターンにあるかどうかを確認
// パターンを指定桁で右シフトしてその桁が1であった場合はtrueを返す
func isRelation(pattern int, member1 int, member2 int) bool {
	return ((pattern>>member1)&1) == 1 && ((pattern>>member2)&1) == 1
}

func countMembers(n int) int {
	result := 0
	for i := 0; n > 0; i++ {
		if (n & 1) == 1 {
			result++
		}
		n >>= 1 // 一桁ずらす
	}
	return result
}

func main() {

	// 議員数と関係性数を取得
	var countMember int
	var countRelation int
	fmt.Scan(&countMember, &countRelation)

	// 関係性データを読み込み
	relations := make([][]int, countRelation)
	for i := 0; i < countRelation; i++ {
		relations[i] = make([]int, 2)
		fmt.Scan(&relations[i][0], &relations[i][1])
	}

	maxPattern := 1 << countMember
	result := 0 // 関係性が担保された議員数
	for pattern := 0; pattern < maxPattern; pattern++ {
		members := 0 // 関係性のある議員パターン
		for j := 0; j < countRelation; j++ {
			if isRelation(pattern, relations[j][0], relations[j][1]) {
				members = members | relations[j][0]
				members = members | relations[j][1]
			}
		}

		if result < countMembers(members) {
			result = members
		}
	}

	fmt.Println(maxPattern)
	fmt.Println(result)

}
