//O(h * w) time where h * w is the area of the matrix | O(h * w) space
function removeIslands(matrix) {
  
	for (let h = 0; h < matrix.length; h++) {
				for (let w = 0; w < matrix[h].length; w++) {
					if (matrix[h][w]) extendIsland(h, w, matrix)
				}
	}

	for (let h = 0; h < matrix.length; h++) {
		for (let w = 0; w < matrix[h].length; w++) {
			matrix[h][w] = matrix[h][w] === 7 ? 1 : 0;
		}
	}
	
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
		
			if (matrix[h][w - 1] === 1) extendIsland(h, w - 1, matrix);
			if (h-1 >= 0 && matrix[h - 1][w] === 1) extendIsland(h - 1, w, matrix);
	}
	
}
