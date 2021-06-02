//Write a function that checks if the elements in the array are a monotonic sequence or not

function isMonotonic(array) {
  let incr = true;
  let decr = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) decr = false;
    if (array[i] < array[i - 1]) incr = false;

    if (!incr && !decr) return false;
  }

  return true;
}

//O(n) time where n is the length of the input array | O(1) space
