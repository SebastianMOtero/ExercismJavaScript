//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const VERTEX = "+";
const PIPE_COLUMN = "|";
const PIPE_ROW = '-';

class Rectangles {
  static count(grid) {
    let count = 0;
    if (grid.length < 2 || grid[0].length < 2) return 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === VERTEX) {
          let topLeft = [i, j];
          // console.log(`TOP LEFT X: ${topLeft[0]} Y: ${topLeft[1]}`);
          let verticesOnRowUpper = this.findRowVertices(grid, i, j);
          for (let k = 0; k < verticesOnRowUpper.length; k++) {
            let topRight = [topLeft[0], verticesOnRowUpper[k]];
            // console.log(`TOP RIGHT X: ${topRight[0]} Y: ${topRight[1]}`);
            let verticesOnColumnLeft = this.findColumnVertices(grid,i,topLeft[1]);
            let verticesOnColumnRight = this.findColumnVertices(grid,i,topRight[1]);
            verticesOnColumnLeft.forEach(bottomLeft => {
              // console.log(`BOTTOM LEFT X: ${bottomLeft} Y: ${topLeft[1]}`);
              if (verticesOnColumnRight.includes(bottomLeft)) {
                // console.log(`BOTTOM RIGHT X: ${bottomLeft} Y: ${topRight[1]}`);
                let verticesOnRowBottom = this.findRowVertices(grid, bottomLeft, j);
                if (verticesOnRowBottom.includes(topRight[1])) { count++; }
              }
            })
          }
        }
      }
    }
    return count;
  }

  static findRowVertices(grid, i, j) {
    const corners = [];
    for (j = j + 1; j < grid[i].length; j++) {
      if (grid[i][j] === ' ' || grid[i][j] === PIPE_COLUMN) { return corners; }
      if (grid[i][j] === VERTEX) { corners.push(j); }
    }
    return corners;
  }

  static findColumnVertices(grid, i, j) {
    const corners = [];
    for (i = i + 1; i < grid.length; i++) {
      if (grid[i][j] === ' ' || grid[i][j] === PIPE_ROW) { return corners; }
      if (grid[i][j] === VERTEX) { corners.push(i); }
    }
    return corners;
  }
}

module.exports = { Rectangles };