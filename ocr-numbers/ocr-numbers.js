//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (input) => {
  input = input.split('\n');

  input = separateRows(input);

  let separateNumbers = [];
  input.map( row => { console.log(row);  console.log(row[0].length)
    for (let i = 0; i < row[0].length; i+=3) {
      let aux = []
      row.map( x => aux.push(x.slice(i, i+3)))
      separateNumbers.push(aux);
    }
    separateNumbers.push(['']);
  }) 
  separateNumbers.pop();
 
  let res = separateNumbers.map( num => identifyNumber(num) ).join("")

  return res;
};


export const separateRows = (rows) => {
  let aux = []
  for (let i = 0; i < rows.length; i+=4) {
    aux.push(rows.slice(i, i+4));
  }
  return aux;
}

export const identifyNumber = (num) => {
  if (num[0] === ' _ ' && num[1] === '| |' && num[2] === '|_|') return '0';
  if (num[0] === '   ' && num[1] === '  |' && num[2] === '  |') return '1';
  if (num[0] === ' _ ' && num[1] === ' _|' && num[2] === '|_ ') return '2';
  if (num[0] === ' _ ' && num[1] === ' _|' && num[2] === ' _|') return '3';
  if (num[0] === '   ' && num[1] === '|_|' && num[2] === '  |') return '4';
  if (num[0] === ' _ ' && num[1] === '|_ ' && num[2] === ' _|') return '5';
  if (num[0] === ' _ ' && num[1] === '|_ ' && num[2] === '|_|') return '6';
  if (num[0] === ' _ ' && num[1] === '  |' && num[2] === '  |') return '7';
  if (num[0] === ' _ ' && num[1] === '|_|' && num[2] === '|_|') return '8';
  if (num[0] === ' _ ' && num[1] === '|_|' && num[2] === ' _|') return '9';
  if (num[0] === '') return ',';
  return '?'
}
