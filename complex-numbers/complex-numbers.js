//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(pReal = 0, pImaginary = 0) {
    this._real = pReal;
    this._imaginary = pImaginary;
    this._abs = Math.sqrt( (Math.pow(pReal, 2) + Math.pow(pImaginary, 2)) );
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imaginary;
  }

  get abs() {
    return this._abs;
  }

  get conj() {
    return new ComplexNumber(this.real, this.imag? -this.imag: 0)
  }

  get exp() {
    return new ComplexNumber(
      Math.exp(this._real) * Math.cos(this._imaginary),
      Math.exp(this._real) * Math.sin(this._imaginary)
    )
  }
  
  add(pComplexNumber) {
    return new ComplexNumber(this._real + pComplexNumber.real, this._imaginary + pComplexNumber.imag);
  }

  sub(pComplexNumber) {
    return new ComplexNumber(this._real - pComplexNumber.real, this._imaginary - pComplexNumber.imag);
  }

  div(pComplexNumber) {
    return new ComplexNumber(
      ((this._real * pComplexNumber.real + this._imaginary * pComplexNumber.imag) /
      (Math.pow(pComplexNumber.real, 2) + Math.pow(pComplexNumber.imag, 2))),
      ((this._imaginary * pComplexNumber.real - this._real * pComplexNumber.imag) /
      (Math.pow(pComplexNumber.real, 2) + Math.pow(pComplexNumber.imag, 2)))
    ); 
  }

  mul(pComplexNumber) { 
    return new ComplexNumber(
      (this._real * pComplexNumber.real - this._imaginary * pComplexNumber.imag),
      (this._imaginary * pComplexNumber.real + this._real * pComplexNumber.imag)
    ); 
  }
}
