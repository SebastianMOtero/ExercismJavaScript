//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const encode = (message) => {
  return  message.toLowerCase().match(/\w/g).map( (letter,i) => {
    let aux = "";
    if (i % 5 === 0) { aux += " "; }; 
    return letter.match(/[a-z]/) ? aux + convertLetter(letter) : aux+letter;
  }).join("").slice(1);
};

export const decode = (secret) => {
  return secret.match(/\w/g).map(letter => letter.match(/[a-z]/) ? convertLetter(letter) : letter).join("");
};

const convertLetter = (letter) => {
  return String.fromCharCode(219 - letter.charCodeAt(0));
}
