//O(nlog(n)) time where n is the length of the array | O(1) space
function twoNumberSum(array, targetSum) {
	array.sort((a, b) => a - b);
	
	let i = 0;
	let j = array.length - 1
	
	while (i < j) {
		if (array[i] + array[j] === targetSum) return [array[i], array[j]]
		else if (array[i] + array[j] > targetSum) j--
		else i++
	}
	
	return []
}
