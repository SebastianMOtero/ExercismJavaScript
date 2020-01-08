//
// This is only a SKELETON file for the 'Difference of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(pNum) {
    this._num = pNum;
  }

  get sumOfSquares() {
    let pNum = this._num;
    let result = 0;
    while(pNum > 0) {
      result += Math.pow(pNum, 2);
      pNum--;
    }
    return result;
  }

  get squareOfSum() {
    let pNum = this._num;  
    let result = 0;
    while (pNum > 0) {
      result += pNum
      pNum--;
    }
    return Math.pow(result, 2)
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
