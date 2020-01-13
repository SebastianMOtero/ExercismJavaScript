//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...list) => { console.log(list)
  let sn = [];
  for (let element = 0; element < list.length-1; element++) {
    sn.push(`For want of a ${list[element]} the ${list[element+1]} was lost.\n`);    
    if (element === list.length-2) {
      if (typeof list[list.length-1] === 'object' ) {
        sn.pop();
        sn.push(`And all for the want of a ${list[list.length-1].qualifier} ${list[0]}.`);
      } else {
        sn.push(`And all for the want of a ${list[0]}.`);
      }
    }   
  }
  return sn.join('');
};
