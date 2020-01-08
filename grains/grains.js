//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
import BigInt from "./lib/big-integer";

export const square = (pSquare) => {
  if (pSquare < 1 || pSquare > 64) {throw new Error ('square must be between 1 and 64')};
  return BigInt(2).pow(pSquare-1).toString();
};

export const total = () => {
  return BigInt(2).pow(64).minus(1).toString()
};
