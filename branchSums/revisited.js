class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(n) time | O(1) space
function branchSums(root) {
	let results = [];
	
	function findSum(root, sum) {
		sum += root.value;
		if (root.left) findSum(root.left, sum)
		if (root.right) findSum(root.right, sum)
		
		if (!root.left && !root.right) results.push(sum);
	}
	
	findSum(root, 0);
	
	return results
}
