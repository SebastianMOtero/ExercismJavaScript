//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class translator {
  static translate(text) {
    return text.split(" ").map(word => this.convertWord(word)).join(" ");
  }
  
  static convertWord(word) {
    const rule1 = new RegExp(/^[aeiou]{1}|^xr|^yt/);
    const rule2 = new RegExp(/^([frpkx]|qu|ch|q|thr|th|sch)/)
    const rule3 = new RegExp(/^([zrtpqsdfghklmwxcvbn]{1}[q]{1}[u]{1})/);
    //const rule4 = new RegExp(/^([zrtpqsdfghklmwxcvbn]{1}[y]{1})| /)
    if (word.match(rule1)) { return word + 'ay'; } 
    else if (word.match(rule3)) {
      let aux = word.match(rule3);
      return word.replace(aux[0], "") + aux[0] + 'ay';
    } else if (word.match(rule2)) {
      let aux = word.match(rule2);
      return word.replace(aux[0], "") + aux[0] + 'ay'
    } else if (word.split("y").length > 1) { 
      let aux = word.split("y");
      if (aux[0] === '') { return aux[1] + 'y' + 'ay'};
      return ('y' + aux[1] + aux[0] + 'ay');
    }
    return;
  }
}
