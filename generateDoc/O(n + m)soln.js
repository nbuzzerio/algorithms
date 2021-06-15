function generateDocument(characters, document) {
	let strChars = {};
	let docChars = {};
	
	for (let char of characters) {
		if (strChars[char]) strChars[char]++;
		else strChars[char] = 1;
	}
	
	for (let char of document) {
		if (docChars[char]) docChars[char]++;
		else docChars[char] = 1;
	}
	
	for (char in docChars) {
		if (!strChars[char]) return false;
		if (docChars[char] > strChars[char]) return false;
	}
	
  return true;
}
//O(n + m) time where n is the number of characters in the document and m the character list | O(c) space where c is the number of characters in the document and character list
