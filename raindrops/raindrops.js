//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (pNumber) => {
  let response = "";
  if (pNumber % 3 === 0) response += "Pling";
  if (pNumber % 5 === 0) response += "Plang";
  if (pNumber % 7 === 0) response += "Plong";

  return response === "" ? pNumber.toString() : response;
};
