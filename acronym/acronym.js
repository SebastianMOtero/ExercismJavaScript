//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (text) => {
  text = text.toUpperCase();
  let startWord = false;
  let sn = "";

  for (let i = 0; i < text.length-1; i++) {
    if (text[i] >= 'A' && text[i] <= 'Z' || text[i] === '\'' ) {
      if (!startWord) {
        startWord = !startWord;
        sn += text[i];
      }
    } else {
      startWord = false;
    }
  }
  return sn;
};
