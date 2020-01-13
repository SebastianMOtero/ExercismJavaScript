//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add(number) {
    let aux = new Rational(  this.a * number.b + number.a * this.b, this.b * number.b );
    if (aux.a === 0 ) { aux.b = 1};
    return aux;
  }

  sub(number) {
    let aux = new Rational(  this.a * number.b - number.a * this.b, this.b * number.b );
    if (aux.a === 0 ) { aux.b = 1};
    return aux;
  }

  mul(number) {
    let aux = new Rational(  this.a * number.a, this.b * number.b );
    aux = this.reduce(aux);
    if (aux.a === 0 ) { aux.b = 1};
    return aux;
  }

  div(number) {
    let aux = new Rational(  this.a * number.b, this.b * number.a );
    if (aux.b === 0) { throw new Error('Zero')}
    aux = this.reduce(aux);
    if (aux.a === 0 ) { aux.b = 1};
    return aux;
  }

  abs() {
    if (this.a < 0 ) { return new Rational(this.a *-1, this.b );}
    if (this.b < 0 ) { return new Rational(this.a, this.b * -1);}
    return this;
  }

  exprational(exp) {
    let aux = new Rational(Math.pow(this.a, exp), Math.pow(this.b, exp));
    aux = this.reduce(aux);
    if (aux.a === 0 ) { aux.b = 1};
    return aux;

//Exponentiation of a rational number r = a/b to a negative integer power n is r^n = (b^m)/(a^m), where m = |n|.

//Exponentiation of a rational number r = a/b to a real (floating-point) number x is the quotient (a^x)/(b^x), which is a real number.
  }

  expreal(x) {
    return this.b === 2 ? Math.sqrt( Math.pow(x, this.a)) : Math.cbrt( Math.pow(x, this.a));
  }

  reduce(number = this) {
    if (number.b % number.a === 0 || -0){
      number.b /= number.a;
      number.a /= number.a;
    }

    if (number.a % number.b === 0 || -0){
      number.a /= number.b;
      number.b /= number.b;
    }


    if (number.a > 0 && number.b < 0 || number.a < 0 && number.b < 0) {
      number.a *= -1;
      number.b *= -1;
    }
    return number;
  }
}
