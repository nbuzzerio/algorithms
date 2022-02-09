//O(n) where n is the number of nodes on the tree | O(h) where h is the height of the longest branch 
function nodeDepths(root) {
  // Write your code here.
	let total = 0;
	function recordDepth(tree, depth) {
		if (tree.left) recordDepth(tree.left, depth+1)
		if (tree.right) recordDepth(tree.right, depth+1)
		total+= depth;
	}
	
	recordDepth(root, 0);
	
	return total;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
