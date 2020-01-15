import { parse } from "path";

//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (puzzle) => {
  let aux = puzzle.split(" == ");
  let chars = new Set(aux.toString().match(/\w/g)) ;
  let result = aux[1];
  let operands = aux[0].split(" + ");
  
  console.log(chars);
  console.log(result);
  console.log(operands);

  generateNumbers(chars);

  function generateNumbers(chars) {
    let start = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9];
    let finish = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    start = parseInt(start.slice(0, chars.size).join(""))
    finish = parseInt(finish.slice(0, chars.size).join(""))
    console.log(start+' '+finish);
    // for (let i = start; i < array.length; i++) {
    //   const element = array[i];
      
    // }
    // 1  a 9
    // 10   98
    // 102   987
    // 1023  9876
    // 10234 98765
  }

  function assignValues(chars) {
    let asd = Object.values(chars)

    // 1..9

    //1  2..9
    //2  1 3..9
  }

  function operation() {
    let numOperands
  }

  function convertToNumber(numString) {
    let num = "";
    numString.map( letter => num += chars[letter] );
    console.log(num);
    return parseInt( num )
  }
  //throw new Error("Remove this statement and implement this function");
};
