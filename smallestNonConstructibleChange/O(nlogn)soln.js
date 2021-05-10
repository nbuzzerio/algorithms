//Write a function that returns the smallest non-constructible amount of change given the coin values in the array.

function nonConstructibleChange(coins) {
  coins = coins.sort((a, b) => a - b);

  let potentialNCC = 1;

  for (const coin of coins) {
    if (potentialNCC >= coin) {
      potentialNCC += coin;
    }
  }

  return potentialNCC;
}

//O(nlogn) time where n is the size of the coins array | O(1) space
