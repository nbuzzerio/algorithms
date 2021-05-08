/*
    Given a sorted array of integers return a sorted array of those integers squared.
*/
function sortedSquaredArray(array) {
  if (array[0] < 0) {
    let s = 0;
    let e = array.length - 1;
    let m = Math.floor((s + e) / 2);
    const squares = [];

    if (array[e] < 0) {
      for (let i = array.length - 1; i >= 0; i--) {
        squares.push(array[i] ** 2);
      }
      return squares;
    }

    while (array[m] !== 0 && !(array[m] > 0 && array[m - 1] < 0)) {
      if (array[m] < 0) s = m;
      else e = m;
      m = Math.floor((s + e) / 2);
    }
    s = m - 1;
    e = m;

    while (!(s < 0 && e === array.length)) {
      if (e === array.length) {
        squares.push(array[s] ** 2);
        s -= 1;
      } else if (s < 0) {
        squares.push(array[e] ** 2);
        e += 1;
      } else if (Math.abs(array[s]) > Math.abs(array[e])) {
        squares.push(array[e] ** 2);
        e += 1;
      } else {
        squares.push(array[s] ** 2);
        s -= 1;
      }
    }
    return squares;
  } else {
    return array.map((int) => int ** 2);
  }
}

//O(n) time | O(n) space
