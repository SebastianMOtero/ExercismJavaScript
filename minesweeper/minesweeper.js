//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (board) =>  {
  let resolvedBoard = new Array(board.length).fill('');
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[0].length; column++) {
      //obtengo casilla
      if (board[row][column] !== ' ') {
        resolvedBoard[row] += board[row][column]
      }
      if (board[row][column] === ' ') {
        let size = 0;
        let borderNorth = row-1 === -1 ? row :  row-1;
        let borderRight = column+1 === board[0].length ? column : column+1;
        let borderSouth = row+1 === board.length ? row : row+1;
        let borderLeft  = column-1 === -1 ? column : column-1;
  
        for (let rowAux = borderNorth; rowAux <= borderSouth; rowAux++) {
          for (let columnAux = borderLeft; columnAux <= borderRight; columnAux++) {
            if( board[rowAux][columnAux] === '*') size++;
          }
        }
        if (size !== 0) {
          resolvedBoard[row] += size
        } else {
          resolvedBoard[row] += board[row][column]
        } 
      }
    }
  }
  return resolvedBoard;
}
