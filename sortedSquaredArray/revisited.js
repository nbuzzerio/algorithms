function sortedSquaredArray(array) {
	let squared = [];
	let l, r;
	let i = 0;
	
	while (array[i] < 0 && i < array.length) {
		i++;
	}
	l = i;
	r = i;
	
	if (i > 0) l--;
	else r++;
	
	while (l >= 0 || r < array.length) {
		
		if ((array[l] || array[l] === 0) && (array[r] || array[r] === 0)) {
			if (array[l]**2 < array[r]**2) {
				squared.push(array[l]**2)
				l--
			} else {
				squared.push(array[r]**2)
				r++				
			}
		} else if (array[l] || array[l] === 0) {
			squared.push(array[l]**2)
			l--
		} else if (array[r] || array[r] === 0) {
			squared.push(array[r]**2)
			r++				
		}
		
	}
	
	
  return squared;
}
