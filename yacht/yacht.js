//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const categoryNumbers = ["ones", "twos", "threes", "fours", "fives", "sixes"]

export const score = (dices, category) => {

  let dicesSize = [0, 0, 0, 0, 0, 0];
  
  dices.map( dice => dicesSize[dice-1]++);

  if (category === 'yacht') {
    return dicesSize.indexOf(5) !== -1 ? 50 : 0
  }

  if (category === 'four of a kind') { 
    let sn = dicesSize.indexOf(4) === -1 ? dicesSize.indexOf(5) : dicesSize.indexOf(4)
    return sn !== -1 ? (sn+1)*4 : 0
  }

  if (category === 'full house') {
    let sn = [dicesSize.indexOf(2), dicesSize.indexOf(3)];
    return sn[0]*sn[1] > 0 ? (sn[0]+1)*2 + (sn[1]+1)*3 : 0;
  }

  if (category.split(" ")[1] === 'straight'){
    if (dicesSize.every(x => x <= 1)) {
      if (category.split(" ")[0] === 'big' && dicesSize[0] === 0) {
        return 30;
      }
      if (category.split(" ")[0] === 'little' && dicesSize[5] === 0) {
        return 30;
      }
    } else {
      return 0
    }
  }

  if (category === 'choice') { 
    return dices.reduce((acc, curr) => acc+curr);
  }

  if (categoryNumbers[category] !== -1) {
    let num = categoryNumbers.indexOf(category) + 1;
    let sn = 0;
    dices.map(dice => {if( dice === num) {sn+=num}});
    return sn;
  }

  
};
