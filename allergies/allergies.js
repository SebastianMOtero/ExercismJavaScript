import { pipeline } from "stream";

//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const items = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats' 
}

export class Allergies {
  constructor(pScore) {
    this._items = [];
    if (pScore > 256) pScore %= 256;
  
    for (let i=256; i>=1; i/=2) {
      if(i <= pScore) {
        this._items.push(items[i]);
        pScore -= i;
      }
    }
  }

  list() { 
    return this._items.reverse();
  }

  allergicTo(pItem) {
    return (this._items.some( x => x===pItem))
  }
}
