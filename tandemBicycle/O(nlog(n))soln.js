function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let results = 0;
  redShirtSpeeds.sort((a, b) => a - b);
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    blueShirtSpeeds.sort((a, b) => a - b);
  }

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    results += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }
  return results;
}
//O(nlog(n)) time where n is the number of bicyclist | O(1) space
