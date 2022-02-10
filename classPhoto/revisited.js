//O(nlo(n)) where n is the length of red/blue shirts arrays | O(1)
function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
	const reds = redShirtHeights.sort();
	const blues = blueShirtHeights.sort();
	
	if (reds[0] > blues[0]) {
		for (i = 0; i < reds.length - 1; i++) {
			if (reds[i] <= blues[i]) return false;
		}
	} else if (blues[0] > reds[0]) {
		for (i = 0; i < reds.length - 1; i++) {
			if (reds[i] >= blues[i]) return false;
		}
	} else return false
	
  return true;
}
