//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (arr) => {
  if (arr.length === 0) { return [] };
  let sn = [];
  let sizeRows = Math.max(...arr.map(x => x.length));

  for (let i = 0; i < sizeRows; i++) {
    sn.push([]);
    for (let k = 0; k < arr.length; k++) {
      if (arr[k][i] !== undefined) {
        sn[i] += arr[k][i];
      } else {
        sn[i] += " "
      }
    }
  }
  sn[sizeRows-1] = sn[sizeRows-1].replace(/ +$/, "")
  return sn;
};
