var letterCombinations = function (digits) {
  const keyPad = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (digits.length === 0) return [];
  let currentCombos = [""];
  let previousCombos;

  for (let i = digits.length - 1; i >= 0; i--) {
    previousCombos = currentCombos;
    currentCombos = [];
    for (let j = 0; j < keyPad[digits[i]].length; j++) {
      for (let k = 0; k < previousCombos.length; k++) {
        currentCombos.push(keyPad[digits[i]][j] + previousCombos[k]);
      }
    }
  }
  return currentCombos;
};
