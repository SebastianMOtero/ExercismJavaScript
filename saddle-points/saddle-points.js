//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (matrix) => {
  let rowsMax = rowsMaxValues(matrix);
  let columnMin = columnsMinValues(matrix);
  let saddlePoints = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] === rowsMax[row] && matrix[row][column] === columnMin[column]) {
        saddlePoints.push({ "row": row+1, "column": column+1});
      }
    }
  }
  return saddlePoints;
};

export const rowsMaxValues = (matrix) => {
  return matrix.map(row => Math.max(...row))
}

export const columnsMinValues = (matrix) => {
  let sn = []
  for (let column = 0; column < matrix[0].length; column++) {
    let min = matrix[0][column]
    for (let row = 1; row < matrix.length; row++) {
      if (matrix[row][column] < min) {
        min = matrix[row][column];
      }
    }
    sn.push(min);
  }
  return sn;
}