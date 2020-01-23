//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Bowling {
  constructor() {
    this.points = [];
    this.pinsUp = 10;
    this.spare = false;
  }

  roll(pins) {
    if (pins === 10) { 
      this.points.push(10); }
    else if(pins === this.pinsUp) {
      this.points[this.points.length-1] += pins;
      this.pinsUp = 10; 
      this.spare = true;
    } else {
      this.pinsUp -= pins;
      if (this.spare) {
        this.points.push(pins*2);
      } else {
        this.points.push(pins);
      }
      this.spare = false;
    }
  }

  score() {
    if (this.points.length === 0) {
      return 0;
    }
    return this.points.reduce((acc, curr) => acc+curr);
  }
}
