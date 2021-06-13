//Write a function that returns the index of the first nonrepeated character in a string containing only english letters.
function firstNonRepeatingCharacter(string) {
  const log = {};

  for (let char of string) {
    if (log[char]) log[char]++;
    else log[char] = 1;
  }

  for (let i = 0; i < string.length; i++) {
    if (log[string[i]] === 1) return i;
  }

  return -1;
}
//O(n) time where n is the length of the string | O(1) space where we will have at most 26 letters for the english alphabet
