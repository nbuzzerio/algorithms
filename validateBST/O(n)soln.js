//Write a function that validates that a BST is valid. All left children are less than the value at the current node and all right children are greater than or equal to it.

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree, parentLeft, parentRight) {
  let valid = true;

  if (tree.left) {
    if (
      tree.left.value >= tree.value ||
      (parentLeft && tree.left.value < parentLeft)
    ) {
      return false;
    } else {
      valid = validateBst(tree.left, parentLeft, tree.value);
    }
  }
  if (tree.right && valid) {
    if (
      tree.right.value < tree.value ||
      (parentRight && tree.right.value >= parentRight)
    ) {
      return false;
    } else {
      valid = validateBst(tree.right, tree.value, parentRight);
    }
  }
  return valid;
}

//O(n) time where n are the nodes of the tree | O(d) space where d is the depth of the tree
