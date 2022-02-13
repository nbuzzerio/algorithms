//O(nlog(n)) time where n is the length of the array | O(1) space
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
	let red = redShirtSpeeds.sort((a,b) => a - b);
	let blue = blueShirtSpeeds.sort(fastest ? (a, b) => b - a : (a, b) => a - b);
	let total = 0;
	
	for (let i = 0; i < red.length; i++) {
		total += Math.max(red[i], blue[i]);
	}
  return total;
}
