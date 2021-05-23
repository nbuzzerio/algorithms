//Write a function that takes a linkedlist and returns it without duplicate values.

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let nodeA = linkedList;
  let nodeB = nodeA.next;

  while (nodeA) {
    if (nodeA.value !== nodeB?.value) {
      nodeA.next = nodeB;
      nodeA = nodeB;
      nodeB = nodeA?.next;
    } else {
      nodeB = nodeB.next;
    }
  }
  return linkedList;
}
//O(n) time where n is the number of nodes in the linked list | O(1) space
