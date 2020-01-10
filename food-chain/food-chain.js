//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
  constructor() {
    this._animals = {
      1: ["fly", "I don't know why she swallowed the fly. Perhaps she'll die."],
      2: ["spider", "It wriggled and jiggled and tickled inside her."],
      3: ["bird", "How absurd to swallow a bird!"],
      4: ["cat", "Imagine that, to swallow a cat!"],
      5: ["dog", "What a hog, to swallow a dog!"],
      6: ["goat", "Just opened her throat and swallowed a goat!"],
      7: ["cow", "I don't know how she swallowed a cow!"],
      8: ["horse", "She's dead, of course!"]
    }
  }

  verse(num) {
    let sn = "";
    sn += `I know an old lady who swallowed a ${this._animals[num][0]}.\n`;

    if (num === 8) {
      sn += `She's dead, of course!\n`;
      return sn;
    }
    
    if (num > 1) {
      sn += `${this._animals[num][1]}\n`;

      for (let i = num; i > 1; i--) {
        if (i === 3) {
          sn += `She swallowed the ${this._animals[i][0]} to catch the ${this._animals[i-1][0]} that`
          + `${this._animals[2][1].slice(2)}\n`
        } else {
          sn += `She swallowed the ${this._animals[i][0]} to catch the ${this._animals[i-1][0]}.\n`
        }
      }
    }


    sn += `${this._animals[1][1]}\n`;

    console.log(sn);
    return sn;
  }

  verses(first, last) {
    let sn = [];

    for (let i = first; i <= last; i++) {
      sn += this.verse(i);
      sn += '\n'
    }
    return sn;
  }
}
