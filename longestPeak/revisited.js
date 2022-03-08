//O(n) time where n is the length of the array | O(1) space
function longestPeak(array) {
	let result = 0;
	let run = 0;
	let incr = false;
	let decr = false;
	for (let i = 0; i < array.length - 1; i++) {
		let j = i+1;
		
		if (array[i] < array[j]) {
			incr = true;
			run = 1;
		}
		
		while (incr || decr) {
			run++;
			i++;
			j++;
			if (incr) {
				if (array[i] > array[j]) {
					incr = false;
					decr = true;
				} else if (array[i] === array[j]) {
					run = 0;
					incr = false
					break;
				}
			} else {
				if (j === array.length) {
					if (run > result) result = run;
					break;
				}
				if (array[i] < array[j]) {
					if (run > result) result = run;
					run = 1;
					incr = true;
					decr = false;
				} else if (array[i] === array[j]) {
					if (run > result) result = run;
					run = 0;
					break;
				}
			}
		}	
	}
	
	return result;
}
