//Implement an insertionSort function

function insertionSort(array) {
  let sortIndex = 0;

  while (sortIndex < array.length - 1) {
    for (let i = sortIndex + 1; i > 0; i--) {
      if (array[i] < array[i - 1]) {
        let placeholder = array[i];
        array[i] = array[i - 1];
        array[i - 1] = placeholder;
      }
    }
    sortIndex++;
  }
  return array;
}

//O(n^2) time where n is the length of the array | O(1) space
