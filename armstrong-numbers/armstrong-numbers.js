//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  let numAux = num.toString().split("");
  return num === numAux.map(n => Math.pow(parseInt(n),numAux.length)).reduce((acc,curr) => acc+curr);
};
