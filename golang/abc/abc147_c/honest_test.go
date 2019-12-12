package main

import "testing"

func TestHonest(t *testing.T) {
	actual := honest(3, 0) // 11の1桁目
	expected := uint(1)
	if actual != expected {
		t.Errorf("Error honest(3,2)\nactual: %v => expected: %v\n", actual, expected)
	}
}

func TestHonest2(t *testing.T) {
	actual := honest(6, 1)
	expected := uint(1)
	if actual != expected {
		t.Errorf("Error honest(6,1)\nactual: %v => expected: %v\n", actual, expected)
	}
}
func TestHonest3(t *testing.T) {
	actual := honest(136, 4) // 10001000 の5桁目
	expected := uint(0)
	if actual != expected {
		t.Errorf("Error honest(136,5)\nactual: %v => expected: %v\n", actual, expected)
	}
}
func TestHonest4(t *testing.T) {
	actual := honest(136, 3) // 10001000 の 4桁目
	expected := uint(1)
	if actual != expected {
		t.Errorf("Error honest(136,4)\nactual: %v => expected: %v\n", actual, expected)
	}
}
