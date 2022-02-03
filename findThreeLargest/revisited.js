//O(n) where n is the length of the array | O(1) space
function findThreeLargestNumbers(array) {
    // Write your code here.
      let large = Number.NEGATIVE_INFINITY;
      let larger = Number.NEGATIVE_INFINITY;
      let largest = Number.NEGATIVE_INFINITY;
      
      for (var i = 0; i < array.length; i++) {
          if (array[i] >= largest) {
              large = larger
              larger = largest;
              largest = array[i];
          } else if (array[i] >= larger) {
              large = larger;
              larger = array[i]
          } else if (array[i] > large) {
              large = array[i]
          }
      }
      
      return [large, larger, largest]
  }