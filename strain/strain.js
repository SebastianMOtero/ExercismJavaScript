//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (arr, condition) => {
  let sn = [];
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) { sn.push(arr[i])}
  }
  return sn;
};

export const discard = (arr, condition) => {
  let sn = [];
  for (let i = 0; i < arr.length; i++) {
    if (!condition(arr[i])) { sn.push(arr[i])}
  }
  return sn;
};
