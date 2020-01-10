//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (strNumber, size) => {
  //invalid input
  if (size < 0 || strNumber.match(/\D/g) !== null) { throw new Error ('Invalid input.');}
  //Slice 
  if ( size > strNumber.length ) {
    throw new Error ('Slice size is too big.');
  }
  //
  if (size === 0) { return 1; }
  let max = 0;
  for (let i = 0; i <= strNumber.length-size; i++) {
    let aux = strNumber.slice(i, i+size);
    aux = aux.split("").map(num => parseInt(num)).reduce((acc, curr) => acc * curr)
    if(aux > max) { max = aux };
  }
  return max;
};
