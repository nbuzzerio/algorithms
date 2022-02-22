//O(n) time where n is the length of the array | O(1) space
function isMonotonic(array) {
	if (array.length <= 1) return true
	let inc;

	for (let i = 0; i < array.length - 1; i++) {
		if (inc === undefined) {
			if (array[i] < array[i+1]) inc = true;
			if (array[i] > array[i+1]) inc = false;
		} else if (inc) {
			if (array[i] > array[i+1]) return false;			
		} else {
			if (array[i] < array[i+1]) return false;
		}
	}
	return true
}
