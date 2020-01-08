//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (text) => {
  let expectedCounts = {};

  text = text.toLowerCase().match(/\w+/g);

  text.reverse().map( (word, i) => {
    if(word !== 't') {
      if (!expectedCounts.hasOwnProperty(word)) expectedCounts[word] = 1;
      else expectedCounts[word]++; 
    } else {
      text[i+1] += '\'t'
    }
  })
  return expectedCounts;
};
