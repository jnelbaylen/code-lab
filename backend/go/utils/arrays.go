package main

import (
	"fmt"
)

func main() {

	var intArray []int = []int{1, 2, 3, 4, 5}

	fmt.Println([...]int{3, 3, 3, 3})
	fmt.Println(intArray)
	fmt.Printf("Length of an array : %v\n", len(intArray))

}
