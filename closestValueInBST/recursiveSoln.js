//Write a function that takes a BST and target value that returns the node value that is closest to the target

function findClosestValueInBst(tree, target) {
  let closest = tree.value;

  const findClosest = (tree) => {
    if (Math.abs(tree.value - target) <= Math.abs(closest - target)) {
      closest = tree.value;
    }

    if (tree.value > target) {
      if (tree.left) {
        findClosest(tree.left);
      }
    } else {
      if (tree.right) {
        findClosest(tree.right);
      }
    }
  };
  findClosest(tree);
  return closest;
}

//Recursive approach
//O(log(n)) time || O(log(n)) space where n is the number of nodes in the BST

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
