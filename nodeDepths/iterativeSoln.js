//Given a binary tree write a function that returns the sum of all the depths of each node on the tree.

function nodeDepths(root) {
  let depthSum = 0;
  const stack = [[root, 0]];
  let lastNode = stack[stack.length - 1];

  while (stack.length > 0) {
    lastNode = stack.pop();
    depthSum += lastNode[1];
    if (lastNode[0].right) stack.push([lastNode[0].right, lastNode[1] + 1]);
    if (lastNode[0].left) stack.push([lastNode[0].left, lastNode[1] + 1]);
  }

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
