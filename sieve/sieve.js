//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (primesUpTo) => {
  let primes = [];
  let listOfNumbers = [...Array(primesUpTo+1).keys()].slice(2);
  while ( listOfNumbers.length !== 0 ) {
    let currentNum = listOfNumbers[0];
    primes.push(currentNum);
    listOfNumbers.shift();

    listOfNumbers = listOfNumbers.filter( num => num % primes[primes.length-1] !== 0);
  }
  return primes;
};
