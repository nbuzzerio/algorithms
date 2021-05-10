//Write a function that returns the smallest non-constructible amount of change given the coin values in the array.

function nonConstructibleChange(coins) {
  coins = coins.sort((a, b) => a - b);

  let potentialNCC = 1;
  let currentTotal = 0;
  let incr = true;

  while (potentialNCC > currentTotal && incr) {
    for (let i = coins.length; i >= 0; i--) {
      if (currentTotal + coins[i] <= potentialNCC) {
        currentTotal += coins[i];
      }
    }

    if (currentTotal === potentialNCC) {
      potentialNCC++;
      currentTotal = 0;
    } else {
      incr = false;
    }
  }

  return potentialNCC;
}

//O(n^x) time where n is the size of the coins array and x is the correct answer | O(1) space
