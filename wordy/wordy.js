//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class ArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ArgumentError';
  }
}

class Wordy {
  constructor(pQuestion) {
    this._question = pQuestion;
    this._operations = pQuestion.match(/plus|minus|divided by|multiplied by/g);
    this._operands = pQuestion.match(/-?[1-9]\d{0,10}/g);
    this._operations == null || this._operands == null ? 
      this.result = new ArgumentError('MAL') : 
      this._operands = this._operands.map(num => parseInt(num));
  }

  operation() {
    let solution = this._operands[0];
    this._operations.map( (operation, i) => {
      switch (operation) {
        case "plus":
          solution += this._operands[i+1]; 
          break;
        case "minus":
          solution -= this._operands[i+1]; 
          break;
        case "divided by":
          solution /= this._operands[i+1];
          break;
        case "multiplied by":
          solution *= this._operands[i+1];
          break;
        default:
          break;
      }
    })
    return solution;
  }

  answer() { 
    if (this.result instanceof ArgumentError) {
      throw this.result
    } else {
      return this.operation()
    }
  }
}

export { Wordy as WordProblem, ArgumentError };
