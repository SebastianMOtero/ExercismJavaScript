//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ALPHABET_LENGTH = 26;

export const isPangram = (input) => {
  return (new Set(input.toLowerCase().match(/[a-z]/g))).size === ALPHABET_LENGTH;
};
