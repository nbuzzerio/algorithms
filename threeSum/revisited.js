//O(n^2) where n is the length of the array | O(n) space
function threeNumberSum(array, targetSum) {
	array.sort((a, b) => a - b)
	const results = [];

	for (let i = 0; i < array.length; i++) {
		let j = i+1;
		let k = array.length - 1;
		let currentSum;
		while(j < k) {
			currentSum = array[i] + array[j] + array[k]
			if (currentSum > targetSum) k--
			else {
				if (currentSum === targetSum) results.push([array[i], array[j], array[k]])
				j++
			}
		}
	}
	
	return results
}
