//O(n^n!) time | O(n^n!) space
function getPermutations(array) {
	
	const results = [];
	
	function findPerms(perm, arr) {
		if (arr.length > 0) {
			for (let i = 0; i < arr.length; i++) {
				let copy = arr.slice()
				copy.splice(i, 1)
				findPerms([...perm, arr[i]], copy)
			}
		} else {
			results.push(perm)
		}
	}
	if (array.length === 0) return []
	findPerms([], array)
	
	return results;
}