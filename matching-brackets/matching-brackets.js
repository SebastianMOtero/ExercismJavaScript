//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const matchingBrackets = (text) => {
  let arr = [];
  text = text.split("");
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '[' || text[i] === '{' || text[i] === '(') {
      arr.push(text[i].charCodeAt(0));
    }
    if (text[i] === ']' || text[i] === '}' || text[i] === ')') {
      if (arr.length === 0 ) { return false; }
      if (arr[arr.length-1] === text[i].charCodeAt(0) - 2 || arr[arr.length-1] === text[i].charCodeAt(0) - 1) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
};