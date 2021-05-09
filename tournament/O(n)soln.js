function tournamentWinner(competitions, results) {
  let leader;
  const stats = {};

  for (let i = 0; i < competitions.length; i++) {
    let home = competitions[i][0];
    let away = competitions[i][1];

    if (results[i]) {
      stats[home] ? (stats[home] += 3) : (stats[home] = 3);
      if (stats[home] > stats[leader] || !stats[leader]) {
        leader = home;
      }
    } else {
      stats[away] ? (stats[away] += 3) : (stats[away] = 3);
      if (stats[away] > stats[leader] || !stats[leader]) {
        leader = away;
      }
    }
  }

  return leader;
}

//O(n) time where n is the number of games played | O(k) space where k is the number of teams competing
