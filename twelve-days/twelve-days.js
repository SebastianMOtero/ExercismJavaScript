//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const rhymes = {
  1: ["first", "a Partridge in a Pear Tree"],
  2: ["second", "two Turtle Doves"],
  3: ["third", "three French Hens"],
  4: ["fourth", "four Calling Birds"],
  5: ["fifth", "five Gold Rings"],
  6: ["sixth", "six Geese-a-Laying"],
  7: ["seventh", "seven Swans-a-Swimming"],
  8: ["eighth", "eight Maids-a-Milking"],
  9: ["ninth", "nine Ladies Dancing"],
  10: ["tenth", "ten Lords-a-Leaping"],
  11: ["eleventh", "eleven Pipers Piping"],
  12: ["twelfth", "twelve Drummers Drumming"],
}
export const recite = (start, end = start) => {
  let sn = "";

  for (let i = start; i <= end; i++) {
    sn += `On the ${rhymes[i][0]} day of Christmas my true love gave to me:`;

    for (let k = i; k >= 2; k--) {
      sn += ` ${rhymes[k][1]},`;
    }

    if (i > 1) { sn += ` and`; };

    sn += ` ${rhymes[1][1]}.\n`;

    if (i < end) { sn+='\n' };
  }
  return sn;
};
