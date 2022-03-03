//O(n) time | O(1) space
function firstDuplicateValue(array) {
	
	for (var i = 0; i < array.length; i++) {
		if (array[Math.abs(array[i]) - 1] < 0) return Math.abs(array[i])
		else array[Math.abs(array[i]) - 1]*= -1;
		
	}
	
	return -1;
}
