//O(n) time where n is the length of the array | O(1) space
function isValidSubsequence(array, sequence) {
	let j = 0
	for (let i = 0; i < array.length; i++) {
		if (array[i] === sequence[j]) j++;
		if (j === sequence.length) return true;
	}
	
	return false
}