//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (text) => {
  text = text.toLowerCase().match(/\w/g);
  return text === null ? true : new Set(text).size === text.length
};
