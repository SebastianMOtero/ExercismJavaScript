//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  constructor(initValue) {
    this.value = initValue;
    this.auxValue = initValue;
    this.linkedCells = [];
  };

  setValue(newValue) {
    if (this.value !== newValue) {
      this.value = newValue;
      this.auxValue = newValue;
    }
  }

  linkCell(cell) {
    this.linkedCells.push(cell);
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.computeFunction = fn;
    this.linkedCells = [];

    this.value = this.computeFunction(this.inputCells);
    inputCells.map(inputCell => inputCells.linkCell(this));
  }

  addCallback(cb) {
    throw new Error(
      'Remove this statement and implement this function'
    );
  }

  removeCallback(cb) {
    throw new Error(
      'Remove this statement and implement this function'
    );
  }
}

export class CallbackCell {
  constructor(fn) {
    throw new Error(
      'Remove this statement and implement this function'
    );
  }
}
