
//Write a function that returns the index of the first nonrepeated character in a string containing only english letters.

//O(n) time where n is the number of char in the string | O(1) space for the 26 letters in the alphabet
function firstNonRepeatingCharacter(string) {
	let lib = {}
	let order = [];
	let j = 0
	for (let i = 0; i < string.length; i++) {
		if (!lib[string[i]] && lib[string[i]] !== 0) {
			lib[string[i]] = j
			order.push(i)
			j++;
		} else {
			order[lib[string[i]]] = -1
		}
	}

	for (let i = 0; i < order.length; i++) {
		if (order[i] > -1) return order[i]
	}
	
  // Write your code here.
  return -1;
}