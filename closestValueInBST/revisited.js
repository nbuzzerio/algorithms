//O(n) time where n is the number of nodes in the tree | O(h) where h is the depth of the tree
function findClosestValueInBst(tree, target) {
  // Write your code here.
	function traverse (tree) {
		if (tree.value === target) closest = target;
		else if (Math.abs(target-tree.value) <
						 Math.abs(target-closest)) {
			closest = tree.value
		} 
	
		if (tree.left) traverse(tree.left);
		if (tree.right) traverse(tree.right);
	}

	let closest = Number.POSITIVE_INFINITY
	traverse(tree)
	
	return closest
}


// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
