//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const THOUSANDS = ["", " thousand", " million", " billion"];
const DIGIT = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];
const TEN = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];
const TEEN = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];

const div = (n, d) => Math.floor(n / d);

const hundred = n => {
  if (n === 0) {
    return undefined;
  } else if (n < 10) {
    return DIGIT[n];
  } else if (n < 20) {
    return TEEN[n - 10];
  } else if (n < 100) {
    return hyphen(TEN[div(n, 10)], DIGIT[n % 10]);
  } else {
    return [DIGIT[div(n, 100)], "hundred", hundred(n % 100)]
      .filter(x => x)
      .join(" ");
  }
};

const hyphen = (prefix, suffix) => {
  if (suffix === "") {
    return prefix;
  } else {
    return `${prefix}-${suffix}`;
  }
};

export class Say {
  inEnglish(number) {
    if (number < 0 || number > 999999999999) {
      throw new Error("Number must be between 0 and 999,999,999,999.");
    }
    if (number === 0) {
      return "zero";
    }
    let n = number;
    return THOUSANDS.map(thousand => {
      const h = n % 1000;
      n = div(n, 1000);
      const hundredStr = hundred(h);
      return hundredStr && hundredStr + thousand;
    })
      .filter(x => x)
      .reverse()
      .join(" ");
  }
}
