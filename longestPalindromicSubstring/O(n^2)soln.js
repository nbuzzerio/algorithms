//Write a function that takes a string and returns its longest palindromic substring
//O(n^2) | O(n) where n is the length of the string
function longestPalindromicSubstring(string) {
  
	if (string.length === 1) return string[0];
	
	let longest = ''
	
	for (let i = 0; i < string.length; i++) {
		let left = i;
		let right = i;
		if (string[i] === string[i+1]) {
			let mirrorLeft = left;
			let mirrorRight = right+1;
			while (string[mirrorLeft] && string[mirrorRight] && string[mirrorLeft] === string[mirrorRight]) {
				if (mirrorRight - mirrorLeft > longest.length) longest = string.slice(mirrorLeft, mirrorRight+1);
				mirrorLeft--;
				mirrorRight++;
			}	
		}
		
		while (string[left] && string[right] && string[left] === string[right]) {
				if (right - left > longest.length) longest = string.slice(left, right+1);
				left--;
				right++;
		}
	}
	return longest
}