function bubbleSort(array) {
  let sortedIndex = 0;
  let sort = true;
  let i = array.length - 1;

  while (sort || sortedIndex < array.length - 1) {
    sort = false;
    while (i > sortedIndex) {
      if (array[i] < array[i - 1]) {
        let placeholder = array[i];
        array[i] = array[i - 1];
        array[i - 1] = placeholder;
      }
      sort = true;
      i--;
    }
    i = array.length;
    sortedIndex++;
  }
  return array;
}

//O(n^2) time where n is the length of the array | O(1) space
