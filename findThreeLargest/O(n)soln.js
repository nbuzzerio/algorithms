function findThreeLargestNumbers(array) {
  let large = Number.NEGATIVE_INFINITY;
  let larger = large;
  let largest = large;

  for (let num of array) {
    if (num >= largest) {
      large = larger;
      larger = largest;
      largest = num;
    } else if (num >= larger) {
      large = larger;
      larger = num;
    } else if (num > large) {
      large = num;
    }
  }
  return [large, larger, largest];
}
//O(n) time where n is the length of the input array | O(1) space
