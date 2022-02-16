//O(n) time where n is the number of competitions | O(t) space where t is the number of teams 
function tournamentWinner(competitions, results) {
	let winner = ''
	let topScore = 0
	let scoreBoard = {}
	
	for (i = 0 ; i < results.length; i++) {
		if (results[i] === 1) {
			if (scoreBoard[competitions[i][0]]) scoreBoard[competitions[i][0]]++
			else scoreBoard[competitions[i][0]] = 1;
			
			if (scoreBoard[competitions[i][0]] > topScore) {
				winner = competitions[i][0];
				topScore = scoreBoard[competitions[i][0]];
			}
				
		} else {
			if (scoreBoard[competitions[i][1]]) scoreBoard[competitions[i][1]]++
			else scoreBoard[competitions[i][1]] = 1;
			
			if (scoreBoard[competitions[i][1]] > topScore) {
				winner = competitions[i][1];
				topScore = scoreBoard[competitions[i][1]];
			}

		}
	}
	
  return winner;
}
