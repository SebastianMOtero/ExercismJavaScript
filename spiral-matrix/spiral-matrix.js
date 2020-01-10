//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class SpiralMatrix {
  // constructor(size) {
  //   this._arr = [];
  //   for (let i = 0; i < size; i++) {
  //     this._arr.push(Array.from(Array(size)).forEach(0));
  //   }
  //   console.log(this._arr)
  // }

  static ofSize(size) {
    let arr = [];
    if (size === 0) { return arr}

    for (let i = 0; i < size; i++) {
      arr.push(Array.from(Array.from('0'.repeat(size))));
    }

    arr = this.fillRigth(arr, 0, 0, 1);
    return arr 
  }

  static fillRigth(arr, row, column, currentValue) {
    if (currentValue > Math.pow(arr.length, 2)) { return arr}
    let exit = false;
    while (!exit) {
      if (arr[row][column] == '0') {
        arr[row][column] = currentValue++;
        column++;
      } else {
        exit = true;
        column--;
        row++;
        return this.fillDown(arr, row, column, currentValue);
      }
    }
  }

  static fillDown(arr, row, column, currentValue) {
    if (currentValue > Math.pow(arr.length, 2)) { return arr}

    let exit = false;
    while (!exit) { 
      if (row === arr.length || arr[row][column] !== '0') { 
        exit = true; 
        row--;
        column--;
        return this.fillLeft(arr, row, column, currentValue);
      } else { 
        arr[row][column] = currentValue++;
        row++;
      }
    }
  }

  static fillLeft(arr, row, column, currentValue) {
    if (currentValue > Math.pow(arr.length, 2)) { return arr}

    let exit = false;
    while (!exit) { 
      if (column === -1 || arr[row][column] !== '0') { 
        exit = true; 
        row--;
        column++;
        return this.fillUp(arr, row, column, currentValue);
      } else { 
        arr[row][column] = currentValue++;
        column--;
      }
    }
  }

  static fillUp(arr, row, column, currentValue) {  
    if (currentValue > Math.pow(arr.length, 2)) { return arr}

    let exit = false;
    while (!exit) { 
      if (arr[row][column] !== '0') { 
        exit = true; 
        row++;
        column++;
        // console.log(arr, row, column, currentValue); return
        return this.fillRigth(arr, row, column, currentValue);
      } else { 
        arr[row][column] = currentValue++;
        row--;
      }
    }
  }
}



