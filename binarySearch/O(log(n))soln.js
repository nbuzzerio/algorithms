function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start !== end - 1) {
    if (array[start] === target) return start;
    if (array[mid] === target) return mid;
    if (array[end] === target) return end;
    else if (array[mid] > target) end = mid;
    else start = mid;

    mid = Math.floor((start + end) / 2);
  }
  return -1;
}

//O(log(n)) time where n is the length of the input array | O(1) space 