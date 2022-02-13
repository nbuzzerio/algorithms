//O(n) where n is the fibonacci number | O(1) space 
function getNthFib(n) {
	let first = 0;
	let second = 1;
	let placeholder;
	let i = 2;
	
	if (n === 1) return 0
	
	while (i < n) {
		placeholder = second
		second = first + second
		first = placeholder;
		
		i++;
	}
	
	return second
	
}
