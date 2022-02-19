//O(n) time | O(1) space
function caesarCipherEncryptor(string, key) {

	key =  key % 26

	let results = ''
	for (let i = 0; i < string.length; i++) {
		let code = string.charCodeAt(i) + key;
		if (code >= 123) code -= 26
		results+= String.fromCharCode(code) 
	}
	
	return results
}
