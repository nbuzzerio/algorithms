//O(n) time | O(n) space where n is the area of the matrix
function riverSizes(matrix) {
      let currentRiver = 0;
      let results = [];
      
      function traverseRiver(i, j) {
          //check left
          if (j > 0 && matrix[i][j-1] === 1) {
              matrix[i][j-1] = 2;
              currentRiver++;
              traverseRiver(i, j-1)
          }
          //check up
          if (i > 0 && matrix[i-1][j] === 1) {
              matrix[i-1][j] = 2;
              currentRiver++;
              traverseRiver(i-1, j)
          }
          //check right
          if (j < matrix[i].length - 1 && matrix[i][j+1] === 1) {
              matrix[i][j+1] = 2;
              currentRiver++;
              traverseRiver(i, j+1)
          }
          //check down
          if (i < matrix.length - 1 && matrix[i+1][j] === 1) {
              matrix[i+1][j] = 2;
              currentRiver++;
              traverseRiver(i+1, j)
          }
      }
      
      for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
              if (matrix[i][j] === 1) {
                  matrix[i][j] = 2;
                  currentRiver++;
                  traverseRiver(i, j)
                  results.push(currentRiver)
                  currentRiver = 0;
              }
          }
      }
      
      return results;
  }
  
  // Do not edit the line below.
  exports.riverSizes = riverSizes;
  