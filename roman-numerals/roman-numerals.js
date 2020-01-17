//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ROMAN_NOTATIONS = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}

export const toRoman = (num) => {
  let powersOfTenParts = num.toString().split("").reverse().map((num, i) => parseInt(num) * Math.pow(10,i)).reverse();
  return powersOfTenParts.map(roman => convertToRoman(roman)).filter(x=>x!==undefined).flat(1).join("");
};

const convertToRoman = (num) => {
  let sn = [];
  let divisor = Math.pow(10, num.toString().length-1);
  switch (num.toString()[0] ) { 
    case '3': sn.push(ROMAN_NOTATIONS[1*divisor]);
    case '2': sn.push(ROMAN_NOTATIONS[1*divisor]); 
    case '1': sn.push(ROMAN_NOTATIONS[1*divisor]); return sn;
    case '4': return [ROMAN_NOTATIONS[1*divisor], ROMAN_NOTATIONS[5*divisor]];
    case '8': sn.push(ROMAN_NOTATIONS[1*divisor]);
    case '7': sn.push(ROMAN_NOTATIONS[1*divisor]);
    case '6': sn.push(ROMAN_NOTATIONS[1*divisor]);
    case '5': sn.push(ROMAN_NOTATIONS[5*divisor]); return sn.reverse();
    case '9': return [ROMAN_NOTATIONS[1*divisor], ROMAN_NOTATIONS[10*divisor]];
    default:
      break;
  }
}
