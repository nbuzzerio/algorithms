//Write a function that accepts an array of integers that represent function execution times and returns the minimum possible wait time to execute the full array of queries.

function minimumWaitingTime(queries) {
  let time = 0;
  let lastDuration = 0;

  queries.sort((a, b) => a - b);

  for (let i = 1; i < queries.length; i++) {
    time += queries[i - 1] + lastDuration;
    lastDuration += queries[i - 1];
  }

  return time;
}

//O(nlog(n)) time where n is the size of the array | O(1) space
