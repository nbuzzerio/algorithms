/*
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 10^4
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let arr;
  if (a.length > b.length) {
    arr = new Array(a.length - b.length);
    b = arr.fill("0").join("") + b;
  } else if (b.length > a.length) {
    arr = new Array(b.length - a.length);
    a = arr.fill("0").join("") + a;
  }

  let carry = false;
  let results = "";

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === "1" && b[i] === "1") {
      if (carry === true) {
        results = "1" + results;
      } else {
        results = "0" + results;
      }
      carry = true;
    } else if (a[i] === "1" || b[i] === "1") {
      if (carry === true) {
        results = "0" + results;
      } else {
        results = "1" + results;
        carry = false;
      }
    } else {
      if (carry === true) {
        results = "1" + results;
      } else {
        results = "0" + results;
      }
      carry = false;
    }
  }
  if (carry === true) results = "1" + results;
  return results;
};
