//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(pMatrixString) {
    this._matrixString = pMatrixString;
  }

  get rows() {
    return this._rows = this._rows || 
           this._matrixString.split('\n').map(rowString => rowString.split(' ').map(Number));
  }

  get columns() {
    return this._columns = this._columns || 
           this.rows[0].map((column, i) => this.rows.map(row => row[i]));
  }
}
