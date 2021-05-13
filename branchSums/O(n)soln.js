//Write a function that takes a binary tree and returns the sum of all the values it contains.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const branchSumHelper = (branchSums, currentTotal, tree) => {
  if (tree === null || tree.value === null) return branchSums;

  currentTotal += tree.value;

  if (tree.right || tree.left) {
    if (tree.left) {
      branchSumHelper(branchSums, currentTotal, tree.left);
    }
    if (tree.right) {
      branchSumHelper(branchSums, currentTotal, tree.right);
    }
  } else {
    branchSums.push(currentTotal);
  }
};

function branchSums(root) {
  const branchSums = [];
  let currentTotal = 0;

  branchSumHelper(branchSums, currentTotal, root);

  return branchSums;
}
//O(n) time | O(n) space where n is the number of nodes
