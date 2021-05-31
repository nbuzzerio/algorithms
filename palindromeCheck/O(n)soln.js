function isPalindrome(string) {
  let right = Math.floor(string.length / 2);
  let left;
  if (string.length % 2 > 0) left = right;
  else left = right - 1;

  while (left > -1) {
    if (string[left] !== string[right]) return false;
    left--;
    right++;
  }

  return true;
}
//O(n) time where n is the length of the string | O(1) space
