//O(nlog(n) where n is the length of the coins array | (O(1) space))
function nonConstructibleChange(coins) {
	
	coins.sort((a,b) => a-b)
	let target = 1;
	let total = 0;
	
	for (let i = 0; i < coins.length; i++) {
		if (coins[i] - 1 > total) return target
		else total = total+coins[i];
		
		target = total+1
	}
	
  return target;
}
