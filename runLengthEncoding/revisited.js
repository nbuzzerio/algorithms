//O(n) time | O(n) space where n is the length of the input string
function runLengthEncoding(string) {
	let j = 1;
	let i = 0;
	let results = ''
	
	while (i < string.length) {
		while (string[i] === string[i + j] && j < 9) {
			j++
		}
		results += j+string[i];
		i = i + j
		j = 1
	}
	return results
}
