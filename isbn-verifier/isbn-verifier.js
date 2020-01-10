//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (idNumber) => {
  idNumber = idNumber.match(/[X\d]/g);
  if (idNumber === null || idNumber.length !== 10) {
    return false;
  };

  let sum = idNumber.map((num,i) => {
    return num === 'X' ? 10 : (parseInt(num) * (10-i));
  }).reduce((acc, curr) => acc+curr);
  return (sum % 11 === 0);
};
