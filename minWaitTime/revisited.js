//O(nlog(n)) time where n is the number of queries | O(1) space
function minimumWaitingTime(queries) {
  let time = 0;
	
	queries.sort((a, b) => a - b);
	
	for (let i = 1; i < queries.length; i++) {
		time += (queries[i - 1]) * (queries.length - i);
	}
  return time;
}
