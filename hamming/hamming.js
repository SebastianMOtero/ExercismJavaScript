//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strandOne, strandTwo) => {
  if (strandOne.length - strandTwo.length !== 0) {
    if (strandOne.length === 0) throw new Error('left strand must not be empty');
    if (strandTwo.length === 0) throw new Error('right strand must not be empty');
    throw new Error('left and right strands must be of equal length');
  }

  let hammingDistance = 0;
  strandOne.split("").map( (nucleotide, i) => {
    if(nucleotide !== strandTwo[i]) hammingDistance++;
  })
  return hammingDistance;
};
