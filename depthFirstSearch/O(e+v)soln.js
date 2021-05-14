//Write a method on the class Node "depthFirstSearch" that takes an empty array and returns an array containing the names of all the nodes.

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

//O(e+n) time where e is the edges of the graph and n is the number of nodes | O(n) space
