//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  constructor(palindromes = []) {
    this.palindromes = palindromes;
  }

  static generate(condition) {
    if (condition.minFactor > condition.maxFactor) {
      throw new Error('min must be <= max');
    }
    let possibleProducts = {};
    for (let i = condition.minFactor; i <= condition.maxFactor; i++) {
      for (let k = condition.minFactor; k <= condition.maxFactor; k++) {
        let factor = (i * k).toString();
        if (factor.split("").reverse().join("") === factor) {
          if (!possibleProducts.hasOwnProperty(i*k)){
            possibleProducts[i*k] = [];
          }
          if ( i <= k) {
            possibleProducts[i*k].push([i, k]);
          }
          // let aux = possibleProducts[i*k]
          // aux.map( x => console.log(x))
          // console.log(aux.some( elem => elem === [k, i]))
          
        }
      }
    } 
    return new Palindromes(Object.entries(possibleProducts));
  }

  get smallest() { 
    if (this.palindromes.length) {
      return { value: Number(this.palindromes[0][0]), factors: this.palindromes[0][1] } ; 
    }
    return { value: null, factors: [] } ; 
  }

  get largest() { console.log(this.palindromes[this.palindromes.length-1])
    if (this.palindromes.length) {
      return { value: Number(this.palindromes[this.palindromes.length-1][0]), 
               factors: this.palindromes[this.palindromes.length-1][1] } ; 
    }
    return { value: null, factors: [] } ; 
  }
}
