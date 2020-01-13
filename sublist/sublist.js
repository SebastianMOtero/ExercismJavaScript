//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list = []) {
    this.list = list;
    this.empty = this.list.length === 0;
    console.log(this.list);
    console.log(this.empty)
  }

  compare(listTwo) {
    if (listTwo.empty && this.empty) {
      return 'EQUAL';
    } else if (listTwo.empty) {
      return 'SUPERLIST';
    } else if (this.empty) {
      return 'SUBLIST';
    }

    let short = this.list;
    let large = listTwo.list; 
    if (this.list.length > listTwo.list.length) {
      short = listTwo.list;
      large = this.list;
    }
    
    for (let i = 0; i < large.length; i++) {
      
      if (large[i] === short[k]) {
        
      }
      
    }
  }
}
