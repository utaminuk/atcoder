package main

import "testing"

func TestPrice(t *testing.T) {
	actual := price(1, 2, 100)
	expected := uint(100 + (2 * 3))
	if actual != expected {
		t.Errorf("Error price(1,2,100)\nactual: %v => expected: %v\n", actual, expected)
	}
}

func TestPrice2(t *testing.T) {
	actual := price(2, 5, 100)
	expected := uint((2 * 100) + (5 * 3))
	if actual != expected {
		t.Errorf("Error price(2,5,100)\nactual: %v => expected: %v\n", actual, expected)
	}
}
