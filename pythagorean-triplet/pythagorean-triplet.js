//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return ( Math.pow(this.a,2) + Math.pow(this.b,2) === Math.pow(this.c,2) && this.a < this.b && this.b < this.c);
  }

  static where(condition) {
    let a;
    let b;
    let c;
    condition.minFactor ? ( a = b = c = condition.minFactor) : ( a = b = c = 1);
    b++;
    c+=2;

    let sn = [];

    for(let j = a; j <= condition.maxFactor-2; j++) {
      for(let k = b; k <= condition.maxFactor-1; k++){
        for (let i = c; i <= condition.maxFactor; i++) {
          if (new Triplet(j, k, i).isPythagorean()) {
            sn.push(new Triplet(j, k, i));
          }
        }
      }
    }

    if (condition.sum) {
      return sn.filter( triplet => triplet.sum() === condition.sum );
    }
    return sn;
  }
}
