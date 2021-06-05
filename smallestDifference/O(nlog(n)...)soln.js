//Write a function that takes two arrays and finds the pair of values that have the smallest absolute difference and returns them in a tuple

function smallestDifference(arrayOne, arrayTwo) {
      arrayOne.sort((a,b) => a - b);
      arrayTwo.sort((a,b) => a - b);
  
      
      let smallestAbs = Number.POSITIVE_INFINITY;
      let smallestValues = [0, 0];
  
      let i = 0;
      let j = 0;
      
      while( i < arrayOne.length && j < arrayTwo.length) {
          if (Math.abs(arrayOne[i] - arrayTwo[j]) === 0) return [arrayOne[i], arrayTwo[j]];
          if (Math.abs(arrayOne[i] - arrayTwo[j]) < smallestAbs) {
              smallestAbs = Math.abs(arrayOne[i] - arrayTwo[j]);
              smallestValues = [arrayOne[i], arrayTwo[j]]
          };
          
          (arrayOne[i] < arrayTwo[j]) ? i++ : j++;
      }
      
      return smallestValues;
  }
  //O(nlog(n) + mlog(m)) time where n is the length of arrayOne and m is the length of arrayTwo | O(1) space