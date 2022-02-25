//O(n^2) time | O(1) space
function validStartingCity(distances, fuel, mpg) {
	
	for (var i = 0; i < distances.length; i++) {
		let milesLeft = 0
		let counter = 0
		let j = i;
		while (counter < distances.length) {
			milesLeft += fuel[j]*mpg;
			if (milesLeft < distances[j]) break
			else milesLeft -= distances[j];
			
			counter++;
			j++;			
			if (j === distances.length) j = 0;
		}
		if (counter === distances.length) return i
	}
	
	
	return -1;
}