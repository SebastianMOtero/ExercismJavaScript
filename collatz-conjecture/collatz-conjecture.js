//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {
  if (num < 1) {
    throw new Error('Only positive numbers are allowed');
  }
  
  let steps = 0;
  while (num !== 1) {
    if (num % 2 === 0){
      num /= 2;
    } else {
      num *= 3;
      num++;
    }
    steps++;
  }
  return steps;
};

