//Write a function that takes an array and returns a new array at which each element is the total product of all the input elements besides the one at that same index. 

function arrayOfProducts(array) {

	const results = [];
	let productLeft = 1;
	let productRight = 1;

	for (let i = 0; i < array.length; i++) {
		if (i === 0) results.push([1]);
		else {
			productLeft*=array[i-1];
			results.push(productLeft);
		}
	}
	for (let j = array.length - 1; j >= 0; j--) {
		if (j !== array.length - 1) {
			productRight*=array[j+1];
			results[j] = results[j]*productRight;
		}
	}
	return results;
}
//O(n) time | O(n) space where n is the number of elements in the array