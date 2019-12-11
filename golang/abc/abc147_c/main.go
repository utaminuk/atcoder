package main

import (
	"fmt"
)

func main() {

	// 読み込み数取得
	var countMember uint
	fmt.Scan(&countMember)

	countMemberComments := make([]uint, countMember)
	mentionMembers := make([][]uint, countMember)
	types := make([][]uint, countMember)

	// ユーザーデータ作成
	for i := uint(0); i < countMember; i++ {
		fmt.Scan(&countMemberComments[i])
		mentionMembers[i] = make([]uint, countMemberComments[i])
		types[i] = make([]uint, countMemberComments[i])

		for j := uint(0); j < countMemberComments[i]; j++ {
			fmt.Scan(&mentionMembers[i][j], &types[i][j])
			mentionMembers[i][j]-- // メンバーIDは-1してラベルと同じにする
		}
		fmt.Printf("%d: %d\n", i, countMemberComments[i])
	}

	fmt.Println(mentionMembers)
	fmt.Println(types)

	// 全探索
	iMax := 1 << countMember
	fmt.Println(iMax)

	// fmt.Printf("%d", result)

}
