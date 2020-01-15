//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearch {
  constructor(arr) {
    if (this.isSorted(arr)) {
      this._array = arr;
    }
  }

  isSorted(arr) {
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i] > arr[i + 1]){
        return false
      } 
    }
    return true
  }

  get array() {
    return this._array;
  }

  indexOf(value) {
    let first = 0;
    let last = this.array.length-1;

    while (Math.abs(first-last) > 1) {
      let current = Math.floor((first+last)/2);
      if (value === this._array[current]) {
        return current;
      } else if (value > this._array[current]) {
        first = current;
      } else {
        last = current;
      }
    }
    return -1;
  }
}
