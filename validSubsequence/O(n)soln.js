/*
Write a function that returns true if the array, sequence, is a subsequence of the input array. There may be numbers between the sequence but they must be in the same order.
*/

function isValidSubsequence(array, sequence) {
  let i = 0;
  for (let num of sequence) {
    while (i < array.length && array[i] !== num) {
      i++;
    }
    if (i >= array.length) return false;
    i++;
  }
  return true;
}
