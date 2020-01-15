//
// This is only a SKELETON file for the 'nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (nth) => {
  if (nth === 0) { throw new Error('there is no zeroth prime'); }
  let primes = [2];
  let curr = 3;
  while (primes.length < nth) {
    for (let i = 2; i < curr; i++) {
      if (curr % i === 0) {
        break;
      }
      if (i === curr-1) { primes.push(curr) }
    }
    curr++;
  }
  return primes[primes.length-1];
}
