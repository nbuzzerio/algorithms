//Given a binary tree write a function that returns the sum of all the depths of each node on the tree.

function nodeDepths(root) {
  let depthSum = 0;

  const nodeDepthHelper = (tree, currentDepth) => {
    if (tree.left) nodeDepthHelper(tree.left, currentDepth + 1);

    if (tree.right) nodeDepthHelper(tree.right, currentDepth + 1);

    depthSum += currentDepth;
  };

  nodeDepthHelper(root, 0);

  return depthSum;
}

//O(n) time where n is the number of nodes in the tree. | O(d) space where d is the depth of the tree.

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
