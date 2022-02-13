//O(n^2) time | O(1) space
function bubbleSort(array) {
  
	let swapped = true;
	
	while (swapped) {
		swapped = false;
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i+1]) {
				swapped = true;
				let placeholder = array[i+1];
				array[i+1] = array[i]
				array[i] = placeholder;
			}
		}
	}
	return array
}
