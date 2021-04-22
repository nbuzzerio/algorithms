var convert = function (s, numRows) {
  let result = "";
  if (numRows === 1) return s;

  let row = 1;

  while (row <= numRows) {
    if (row === numRows || row === 1) {
      for (let i = row - 1; i < s.length; i += 2 * (numRows - 1)) {
        result += s[i];
      }
    } else {
      for (let i = row - 1; i < s.length; ) {
        result += s[i];
        i += 2 * (numRows - row);
        if (i < s.length) {
          result += s[i];
          i += 2 * (numRows - 1) - 2 * (numRows - row);
        }
      }
    }
    row++;
  }
  return result;
};