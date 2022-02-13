//Given a matrix of h * w where 1's represent land and 0's water, write a function that removes all 1's representing islands which is land not connected to the edge  of the matrix.
//O((h * w)^2) time where h * w represents the area of the matrix | O(1) space
function removeIslands(matrix) {
      let i = 0;
      while (i < matrix.length) {	
          for (let h = 0; h < matrix.length; h++) {
                  for (let w = 0; w < matrix[h].length; w++) {
                      if (matrix[h][w]) extendIsland(h, w, matrix)
                  }
          }
          console.log(matrix)
          i++
      }
      for (let h = 0; h < matrix.length; h++) {
                  for (let w = 0; w < matrix[h].length; w++) {
                      matrix[h][w] = matrix[h][w] === 7 ? 1 : 0;
                  }
      }
      console.log(matrix)
      
    return matrix;
  }
  
  function extendIsland(h, w, matrix) {
      
      if (w === 0 || h === 0 || 
              w === matrix[h].length - 1 || 
              h === matrix.length - 1 ||
              matrix[h][w + 1] === 7 || 
              matrix[h][w - 1] === 7 || 
              matrix[h + 1][w] === 7 || 
              matrix[h - 1][w] === 7) {
          
              matrix[h][w] = 7;
      }
  }