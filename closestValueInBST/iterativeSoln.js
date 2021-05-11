//Write a function that takes a BST and target value that returns the node value that is closest to the target

function findClosestValueInBst(tree, target) {
  let closest = tree.value;
  let lastBranch = true;
  let currentRoot = tree;

  while (lastBranch) {
    if (Math.abs(currentRoot.value - target) <= Math.abs(closest - target)) {
      closest = currentRoot.value;
    }

    if (currentRoot.value > target) {
      if (currentRoot.left) {
        currentRoot = currentRoot.left;
      } else {
        lastBranch = false;
      }
    } else {
      if (currentRoot.right) {
        currentRoot = currentRoot.right;
      } else {
        lastBranch = false;
      }
    }
  }

  return closest;
}

//Iteritive approach
//O(log(n)) time || O(1) space where n is the number of nodes in the BST

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
