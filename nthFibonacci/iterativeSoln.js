//Write a function that returns the value of the nth fibonacci number

function getNthFibonacci(n) {
  if (n === 1) return 0;

  let a = 0;
  let b = 1;
  while (n > 2) {
    let placeholder = b;
    b += a;
    a = placeholder;
    n--;
  }
  return b;
}

//O(n) time where n is the number in the Fibonacci sequence | O(1) space
