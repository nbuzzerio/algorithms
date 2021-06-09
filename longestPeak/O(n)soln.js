//Write a function that finds the longest peak in an array. A peak can be defined by a sequence of numbers that increases and then decreases.

function longestPeak(array) {
  let incr;
  let decr;
  let i = 0;
  let j = 1;
  let length;
  let longest = 0;

  while (j < array.length) {
    if (array[j] > array[j - 1]) {
      incr = true;
      if (decr) {
        i = j - 1;
        decr = false;
      }
    } else if (array[j] < array[j - 1]) {
      decr = true;
      if (!incr) {
        i = j;
      }
    } else {
      i = j;
      incr = false;
      decr = false;
    }
    length = j - i + 1;
    if (incr && decr && length > longest) longest = length;
    j++;
  }

  return longest;
}
//O(n) time | O(1) space
