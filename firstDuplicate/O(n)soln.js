//Write a function that finds the first duplicate integer in and array where the integers in the array are between 1 and n where n is the length of the array.

//Linear space solution
function firstDuplicateValue(array) {
  
	const ints = {};
	
	for (let i = 0; i < array.length; i++) {
		if (ints[array[i]]) return array[i];
		else ints[array[i]] = true;
	}
	
  return -1;
}
//O(n) time | O(n) space where n is the length of the array

//Constant space solution
function firstDuplicateValue(array) {
	
	for (let i = 0; i < array.length; i++) {
		let value = Math.abs(array[i]);
		if (array[value-1] < 0) return value;
		else array[value-1]*=-1;
	}
	
  return -1;
}
//O(n) time | O(1) space where n is the length of the array