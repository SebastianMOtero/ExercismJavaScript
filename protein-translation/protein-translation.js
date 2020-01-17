//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const PROTEINS = [
  "Methionine",
  "Phenylalanine",
  "Leucine",
  "Serine",
  "Tyrosine",
  "Cysteine",
  "Tryptophan"
];

const CODONS = {
  "AUG": PROTEINS[0],
  "UUU": PROTEINS[1],
  "UUC": PROTEINS[1],
  "UUA": PROTEINS[2],
  "UUG": PROTEINS[2],
  "UCU": PROTEINS[3],
  "UCC": PROTEINS[3],
  "UCA": PROTEINS[3],
  "UCG": PROTEINS[3],
  "UAU": PROTEINS[4],
  "UAC": PROTEINS[4],
  "UGU": PROTEINS[5],
  "UGC": PROTEINS[5],
  "UGG": PROTEINS[6],
  "UAA": "STOP",
  "UAG": "STOP",
  "UGA": "STOP",
}

export const translate = (RNA) => {
  if (RNA === undefined) { return []; };
  if (RNA.length % 3 !== 0) { throw new Error('Invalid codon')};
  if (RNA.match(/[^AUGC]/g) !== null) { throw new Error('Invalid codon')};

  RNA = RNA.match(/.{1,3}/g).map(codon => CODONS[codon]);
  if (RNA.indexOf('STOP') !== -1) {
    RNA = RNA.slice(0, RNA.indexOf('STOP'));
  }
  return RNA;
};
