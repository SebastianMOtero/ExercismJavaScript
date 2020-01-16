//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ALPHABET = [...Array(26).keys()].map(num => String.fromCharCode(num+97));
const ALPHABET_LEN = ALPHABET.length;

export class RotationalCipher {
  static rotate(text, offset) {
    offset %= ALPHABET_LEN;

    text = text.split('').map(letter => {
      if (letter.match(/[A-Za-z]/) ) {
        let sensitive = letter.charCodeAt(0) < 91 ? 65 : 97;
        return String.fromCharCode((letter.charCodeAt(0) - sensitive + offset) % ALPHABET_LEN + sensitive);
      }
      return letter;
    })
    return text.join('');
  }
}
