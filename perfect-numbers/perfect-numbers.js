//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (pNumber) => {
  if (pNumber < 1) throw new Error('Classification is only possible for natural numbers.');

  let factors = [1];

  for (let i = 2; i<=pNumber/i ; i++) {
    if(pNumber % i === 0) {
      factors.push(i);
      if(i != pNumber/i) factors.push(pNumber/i);
    }
  }
  let aliquotSum = factors.reduce( (acc, curr) => acc + curr);

  return aliquotSum  < pNumber || aliquotSum === 1 ? 'deficient' :
         aliquotSum  >  pNumber ? 'abundant' :
         'perfect';
};
