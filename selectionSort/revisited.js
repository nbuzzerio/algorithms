//O(n^2) time | O(1) space
function selectionSort(array) {
    // Write your code here.
      for (let i = 0; i < array.length; i++) {
          
          let smallest = Number.POSITIVE_INFINITY;
          let index;
          let j = i + 1;
          
          while (j < array.length) {
              if (array[j] < smallest) {
                  smallest = array[j];
                  index = j;
              }
              j++;
          }
          
          if (index && smallest < array[i]) {
              let placeholder = array[i];
              array[i] = array[index];
              array[index] = placeholder;	
          }
      }
      
      return array
  }