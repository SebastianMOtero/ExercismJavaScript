//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(message) {
    this.message = message;
  }

  normalizePlaintext() {
    return this.message.toLowerCase().match(/\w/g).join("");
  }

  size() {
    this.message = this.normalizePlaintext();
    this.rows  = Math.round(Math.pow(this.message.length, 1/2)); 
    this.columns = Math.pow(this.rows,2) >= this.message.length ? this.rows : this.rows+1; 
    return this.columns;
  }

  plaintextSegments() {
    this.size();
    this.rectangle = []; 
    for (let i = 0; i < this.rows; i++) {
      this.rectangle.push(this.message.slice(i*this.columns, i*this.columns+this.columns));
    }
    return this.rectangle;
  }

  ciphertext() {
    this.plaintextSegments();
    this.cipherMessage = [];
    for (let i = 0; i < this.columns; i++) {
      let newRow = [];
      for (let k = 0; k < this.rows; k++) {
        newRow.push(this.rectangle[k][i]);
      }
      this.cipherMessage.push(newRow.join(""));
    }
    return this.cipherMessage.join("");
  }
}
