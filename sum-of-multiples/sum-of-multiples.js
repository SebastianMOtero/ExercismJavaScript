//
// This is only a SKELETON file for the 'Sum of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (multiples, limit) => {
  multiples = multiples.filter( num => num !== 0)
  if (multiples.length ===0 ) {return 0;}
  return [...new Set((multiples.map( multiple => {
    let sn = []; 
    if (multiple > limit) { return [0]}
    while(multiple < limit) { 
      sn.push(multiple);
      multiple += sn[0];
    }
    return sn;
  })).reduce((acc, curr) => acc.concat(curr)))]
  .reduce( (acc, curr) => acc+curr)
};
