//Write a function that takes in an array of ranges and merges any ranges that overlap

function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < array.length; i++) {
    let merged = true;

    while (merged) {
      if (i === array.length - 1) break;
      if (
        array[i][0] === array[i + 1][0] ||
        array[i][1] >= array[i + 1][0] ||
        array[i][1] >= array[i + 1][1]
      ) {
        array.splice(i, 2, [
          array[i][0],
          Math.max(array[i][1], array[i + 1][1]),
        ]);
      } else {
        merged = false;
      }
    }
  }

  return array;
}
//O(nlog(n)) time | O(n) space where n is the length of the array
