//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldSystemStored) => {
  let newSystemStored = {};

  for (let value in oldSystemStored) {
    oldSystemStored[value].map(letter => {
      letter = letter.toLowerCase();
      newSystemStored[letter] = parseInt(value);
    });
  }
  return newSystemStored;
};
