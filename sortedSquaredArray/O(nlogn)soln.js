/*
    Given a sorted array of integers return a sorted array of those integers squared.
*/

function sortedSquaredArray(array) {
  const squared = array.map((int) => int ** 2);
  if (array[0] < 0)
    return squared.sort((a, b) => {
      if (a < b) return -1;
    });
  else return squared;
}

//O(nlogn) time | O(n) space