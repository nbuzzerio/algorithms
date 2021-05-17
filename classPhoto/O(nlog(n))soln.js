//Write a function that takes in two groups of students, red shirts and blue shirts, and returns true or false if these groups can be in their own row and always have a taller person behind the shorter person.

function classPhotos(redShirtHeights, blueShirtHeights) {
  let red, blue;
  let rSH = redShirtHeights;
  let bSH = blueShirtHeights;
  rSH.sort((a, b) => b - a);
  bSH.sort((a, b) => b - a);

  if (rSH[0] > bSH[0]) {
    red = 0;
    blue = 1;
  } else if (bSH[0] > rSH[0]) {
    red = 1;
    blue = 0;
  } else {
    return false;
  }

  for (let i = 0; i < rSH.length; i++) {
    if (red === 0) {
      if (rSH[i] <= bSH[i]) return false;
    } else {
      if (bSH[i] <= rSH[i]) return false;
    }
  }

  return true;
}
//O(nlog(n)) time where n is the number of students | O(1) space
