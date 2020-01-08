//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (pNum) => {
  let solution = [];
  let factor = 2;

  while (pNum >= factor) {
    if (pNum % factor === 0) {
      solution.push(factor);
      pNum /= factor;
    } else {
      factor++;
    }
  }

  return solution;
};
