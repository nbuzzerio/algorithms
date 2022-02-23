//Check whether or not an array can be cycled through in a single cycle when each index represents the number of jumps forward to make in the cylcle. You cannot revisit any indecies.

//O(n) time | O(1) space
function hasSingleCycle(array) {
	let counter = 0;
	let currentPosition = 0
	let currentJump = array[0]
	let displacement
	
	while (counter < array.length) {
		displacement = (currentPosition + currentJump) % array.length;

		if (displacement < 0) currentPosition = array.length + displacement
		else currentPosition = displacement
		
		if (array[currentPosition]) {
			currentJump = array[currentPosition]
			array[currentPosition] = false
		} else {
			return false 
		}
		counter++
	}
	
	return true;
}