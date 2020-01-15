//
// This is only a SKELETON file for the 'Two Bucket' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class TwoBucket {
  constructor(buckOne, buckTwo, goal, starterBuck) {   
    this._starterBuck = starterBuck;
    this._goal = goal; 
    this._buckOne = { buck: buckOne, buckCapacity: buckOne }
    this._buckTwo = { buck: buckTwo, buckCapacity: buckTwo }
    if (starterBuck === 'one') {
      this._goalBucket = this._buckOne;
      this._otherBucket = this._buckTwo;
    } else {
      this._goalBucket = this._buckTwo;
      this._otherBucket = this._buckOne;
    }
  }

  isBuckFull(buck) {
    return buck.buck === buck.buckCapacity;
  }

  isBuckEmpty(buck) {
    return buck.buck === 0;
  }

  moves() {
    let moves = 0;
    while (this._goalBucket.buck !== this._goal) {
      if (this.isBuckFull(this._otherBucket)) {
        this._otherBucket.buck = 0;
      } else {
        if (this.isBuckEmpty(this._goalBucket)) {
          this._goalBucket.buck = this._goalBucket.buckCapacity;
        } else {
          let capacityAvailable = this._otherBucket.buckCapacity - this._otherBucket.buck;
          if (this._goalBucket.buck <= capacityAvailable) {
            this._otherBucket.buck += this._goalBucket.buck
            this._goalBucket.buck = 0;
          } else {
            this._goalBucket.buck -= capacityAvailable;
            this._otherBucket.buck += capacityAvailable;
          }
        }
      }
      moves++
    }
    return moves;
  }

  get goalBucket() {
    return this._starterBuck;
  }

  get otherBucket() {
    return this._otherBucket.buck;
  }
}
