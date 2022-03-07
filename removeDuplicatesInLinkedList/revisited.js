class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	let currentNode = linkedList;
	let nextNode = linkedList.next;
	
	while (nextNode !== null) {
		if (currentNode.value === nextNode.value) {
			currentNode.next = nextNode.next
			nextNode = currentNode.next
		} else {
			currentNode = nextNode
			nextNode = currentNode.next
		}
	}
	
  return linkedList;
}
