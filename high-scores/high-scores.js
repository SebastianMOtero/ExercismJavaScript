//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(list) {
    this.list = list;
  }

  get scores() {
    return this.list;
  }

  get latest() {
    return this.list[this.list.length-1]
  }

  get personalBest() {
    return Math.max(...this.list)
  }

  get personalTopThree() {
    let aux = this.list.sort( (a,b) => b - a)
    return aux.length > 3 ? [aux[0], aux[1], aux[2]] : aux
  }
}
