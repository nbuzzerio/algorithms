//Implement an selectionSort function

function selectionSort(array) {
  let sortIndex = -1;
  let smallest;

  while (sortIndex < array.length - 1) {
    let i;
    smallest = sortIndex + 1;
    for (i = sortIndex + 1; i < array.length; i++) {
      if (array[i] < array[smallest]) smallest = i;
    }
    let placeholder = array[smallest];
    array[smallest] = array[sortIndex + 1];
    array[sortIndex + 1] = placeholder;

    sortIndex++;
  }
  return array;
}

//O(n^2) time where n is the length of the array | O(1) space
