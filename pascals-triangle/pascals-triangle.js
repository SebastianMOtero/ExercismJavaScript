import { sign } from "crypto";

//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class Triangle {
  constructor(pRows) {
    this._triangle = [];

    this._triangle.push([1]);
    if (pRows === 1) { return ;}

    this._triangle.push([1, 1]);
    if (pRows === 2) { return ;}

    for (let i = 2; i < pRows; i ++) {
      let currentRow = [];
      currentRow.push(1);
      for (let k = 1; k < i; k++ ) {
        currentRow.push(this._triangle[i-1][k-1] + this._triangle[i-1][k]);
      }
      currentRow.push(1);
      this._triangle.push(currentRow);
    }
    return;
  }

  get lastRow() {
    return this._lastRow = this._triangle[this._triangle.length-1]
    throw new Error("Remove this statement and implement this function");
  }

  get rows() {
    return this._rows = this._triangle
    throw new Error("Remove this statement and implement this function");
  }
}
