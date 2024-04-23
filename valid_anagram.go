package main

// Time complexity: O(n)
// Space complexity: O(1)

func isAnagram(s string, t string) bool {
	chars := make([]int, 26)

	for _, v := range s {
		i := int(v - 'a')
		chars[i]++
	}

	for _, v := range t {
		i := int(v - 'a')
		chars[i]--
	}

	for _, v := range chars {
		if v != 0 {
			return false
		}
	}

	return true
}

// func main() {
// 	fmt.Println(isAnagram("anagram", "nagaram"))
// 	fmt.Println(isAnagram("rat", "car"))
// }
