//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Diamond {
  makeDiamond(letter) {

    if (letter === 'A') { return letter+'\n' };

    let width = 2 * (letter.charCodeAt(0) - 64) - 1;

    let sn =  Array(width).fill(Array(width).fill(' '));

    for (let i = 0; i < width/2; i++) {
      let letter = String.fromCharCode(65+i);
      let aux = Array(width).fill(' ');
      aux[parseInt(width/2) - i] = letter;
      aux[parseInt(width/2) + i] = letter;
      sn[i] = aux.join("");
      sn[width-1-i] = sn[i];
    }
    return sn.join('\n')+'\n';
  }
}
