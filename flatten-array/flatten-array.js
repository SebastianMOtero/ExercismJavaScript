//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const flatten = (input) => {
  return input.reduce((acc, curr) => [...acc, ...aux(curr)], []);
}

const aux = (input) => {
  if (Array.isArray(input)) {
    return flatten(input);
  } else if (input === undefined || input === null){
    return [];
  } else {
    return [input];
  }
}

