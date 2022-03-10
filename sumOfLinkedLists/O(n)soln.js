class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  //O(n) time | O(n) space where n is the length of the longest linkedList
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
      let carryOver = 0;
      let additionStack = [];
      let nodeOne = linkedListOne;
      let nodeTwo = linkedListTwo;
      let result;
      
      while (nodeOne || nodeTwo) {
          let sum;
          if (nodeOne && nodeTwo) {
              sum = nodeOne.value + nodeTwo.value + carryOver
              nodeOne = nodeOne.next;
              nodeTwo = nodeTwo.next;
          } else if (nodeOne) {
              sum = nodeOne.value + carryOver;
              nodeOne = nodeOne.next;
          }
          else {
              sum = nodeTwo.value + carryOver;
              nodeTwo = nodeTwo.next;
          }
          
          carryOver = 0;
          
          if (sum > 9) {
              carryOver = 1;
              sum-= 10;
          }
          additionStack.push(sum)
      }
      
      if (carryOver) additionStack.push(1);
          
      result = new LinkedList(additionStack.shift());
      let currentResultNode = result;
      while (additionStack.length > 0) {
              currentResultNode.next = new LinkedList(additionStack.shift());
              currentResultNode = currentResultNode.next
      }
      return result;
  }