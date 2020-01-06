//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(pSide1, pSide2, pSide3) {
    if (pSide1 >= pSide2 + pSide3 || pSide2 >= pSide1 + pSide3 || pSide3 >= pSide1 + pSide2) {
      this._kind = 'error';
    }
    if (pSide1 <= 0 || pSide2 <= 0 || pSide3 <= 0) {
      this._kind = 'error'
    }
    if (this._kind === undefined) {
      this._side1 = pSide1;
      this._side2 = pSide2;
      this._side3 = pSide3;
    }
  }

  kind() {
    if (this._kind === 'error') throw new Error('error');

    if (this._side1 === this._side2 || this._side1 === this._side3 || this._side2 === this._side3) {
      if (this._side1 === this._side2 && this._side1 === this._side3) {
        return 'equilateral';
      } 
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}
