//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list = []) {
    this.list = list;
  }

  compare(listTwo) {
    let stringListOne = this.list.toString();
    let stringListTwo = listTwo.list.toString();

    if (stringListOne === stringListTwo) return 'EQUAL';
    else if (stringListOne.includes(stringListTwo)) return 'SUPERLIST';
    else if (stringListTwo.includes(stringListOne)) return 'SUBLIST';
    else return 'UNEQUAL';
  }
}
