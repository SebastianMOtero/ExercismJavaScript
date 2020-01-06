const KEY_LENGTH = 10;

export class Cipher {
  constructor(pKey = this.randomKey()) {
    this._key = pKey;
  }

  randomChar() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  }

  randomKey() {
    let key = "";
    while (key.length < KEY_LENGTH) {
      key += this.randomChar();
    };
    return key;
  }

  convert(letter, index, operation) {
    let offset = this._key.charCodeAt(index%this._key.length) - 97;
    let newChar = letter.charCodeAt(0) + operation * offset;
    if (newChar > 96 && newChar < 123) {
      return String.fromCharCode(newChar);
    }
    return newChar > 122 ? String.fromCharCode(newChar-26) : String.fromCharCode(newChar+26);
  }

  encode(pSecret) { console.log(this._key)
    let cipherMessage = "";
    pSecret.split("").map( (letter, index) => {
      cipherMessage += this.convert(letter, index, 1);
    })
    return cipherMessage;
  }

  decode(pSecret) {
    let message = "";
    pSecret.split("").map( (letter, index) => {
      message += this.convert(letter, index, -1);
    });
    return message;
  }

  get key() {
    return this._key;
  }
}
