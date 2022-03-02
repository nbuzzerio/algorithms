//O(log(n)) where n is the total number of nodes | O(1)
function binarySearch(array, target) {
	let s = 0;
	let e = array.length - 1;
	let m = Math.floor((s+e) / 2) 
	
	if (array.length === 0) return -1
	
	while ((e - s) > 1) {
		console.log(s, m, e)
		if (array[s] === target) return s
		if (array[e] === target) return e
		if (array[m] === target) return m
		
		if (array[m] > target) e = m;
		else if (m < target) s = m

		m = Math.floor((s + e) / 2)
	}
	
	return -1

}
