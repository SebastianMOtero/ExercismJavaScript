//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(pHours = 0, pMinutes = 0) {
    this._hours = pHours;
    this._minutes = pMinutes;
  }

  clock() {
    this._hours += Math.trunc(this._minutes/60);
    this._hours %= 24;
    this._minutes %= 60;

    if (this._minutes < 0) {
      this._minutes += 60;
      this._hours--;
    }

    if (this._hours < 0) {
      this._hours += 24;
    }
  }

  toString() { 
    this.clock();
    let clock = ""; 
    this._hours < 10 ? clock += '0' + this._hours.toString() : clock += this._hours.toString();
    this._minutes < 10 ? clock += ':0' + this._minutes.toString() : clock += ':' + this._minutes.toString();
    
    return clock;
  }

  plus(pMinutes) {
    this._minutes += pMinutes;
    return this;
  }

  minus(pMinutes) {
    this._minutes -= pMinutes;
    return this;
  }

  equals(pClock) {
    this.clock();
    pClock.clock();
    return (this._hours === pClock._hours && this._minutes === pClock._minutes);
  }
}
