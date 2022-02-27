function insertionSort(array) {
  // Write your code here.
	let sortedIndex = 0;
	let placeholder;
	
	while (sortedIndex < array.length - 1) {
		if (array[sortedIndex] >= array[sortedIndex + 1]) {
			placeholder = array[sortedIndex + 1]
			array[sortedIndex + 1] = array[sortedIndex]
			array[sortedIndex] = placeholder
			
			let n = 1;
			
			while (array[sortedIndex - n] >= ( array[sortedIndex - (n - 1)] )){
				placeholder = array[sortedIndex - (n - 1)]
				array[sortedIndex - (n - 1)] = array[sortedIndex - n]
				array[sortedIndex - n] = placeholder
				n++
			}
			
		}
		
		sortedIndex++
	}
	
	return array
}
