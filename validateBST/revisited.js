class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(n) time where n is the number of nodes on the tree | O(d) where d is the longest depth of the tree
function validateBst(tree, largest, smallest) {
	let valid = true;
	if (largest === undefined) largest = Number.POSITIVE_INFINITY;
	if (smallest === undefined) smallest = Number.NEGATIVE_INFINITY;
	
  if (tree.left) {
		if (tree.left.value < tree.value && tree.left.value >= smallest) {
			if (valid) {
				valid = validateBst(tree.left, tree.value, smallest)
			}
		}	else {
			return false
		}
	}
	
	if (tree.right) {
		if (tree.right.value >= tree.value && tree.right.value < largest) {
			if (valid) {
				valid = validateBst(tree.right, largest, tree.value)
			}
		}	else {
			console.log(tree)
			return false
		}
	}
	
	return valid
}
