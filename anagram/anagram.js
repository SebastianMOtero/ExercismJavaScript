//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, list) => {
  let auxWord = word.toLowerCase().split("").sort().join("");
  return list.filter( x => x.toLowerCase().split("").sort().join("") === auxWord).filter(x => x.toLowerCase() !== word.toLowerCase() );
}
