//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(strNumber) {
    this._number = strNumber.split("").map(num => parseInt(num));
  }

  get digits() {
    return this._number;
  }

  slices(size) {
    if (size > this._number.length) {
      throw new Error('Slice size is too big.')
    }
    let sn = []
    for (let i = 0; i <= this._number.length-size; i++) {
      let aux = [];
      for (let k = 0; k < size; k++) {
        aux.push(this._number[k+i]);
      }
      sn.push(aux);
      aux = [];
    }
    return sn;
  }
}
