//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number, currBase = 0, convBase = 0) => {
  if (currBase !== parseInt(currBase)) {throw new Error('Wrong input base')};
  if (convBase !== parseInt(convBase)) {throw new Error('Wrong output base')};
  if (currBase <= 1) {throw new Error('Wrong input base')};
  if (convBase <= 1) {throw new Error('Wrong output base')};
  if (number.length === 0 ) {throw new Error('Input has wrong format')}
  if (number.some(n => n > currBase-1 || n < 0)) {throw new Error('Input has wrong format')}
  if (number.length > 1 && number[0] === 0) {throw new Error('Input has wrong format')}
  if (number.length === 1 && number[0] === 0) return [0];

  return toBaseX(toBase10(number, currBase), convBase);
};

const toBase10 = (number, currBase) => {
  number = number.reverse().map((num,i) => num * Math.pow(currBase, i)).reverse();
  return number.length > 1 ? [number.reduce((acc, curr) => acc+curr)] : number;
}

const toBaseX = (number, convBase) => {
  let sn = [];
  while (number > 0) {
    sn.push(number % convBase);
    number = parseInt(number/convBase);
  }
  return sn.reverse();
}