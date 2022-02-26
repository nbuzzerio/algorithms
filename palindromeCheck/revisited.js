//O(n) time | O(1) space 
function isPalindrome(string) {
	let len = string.length;
	let i = len % 2 === 0 ? (len / 2) - 1 : Math.floor(len/2);
	let j = len % 2 === 0 ? (len / 2) : Math.floor(len/2);
	
	while (i >= 0 ) {
		if (string[i] !== string[j]) return false;
		
		i--;
		j++;
	}
	
	return true
}
