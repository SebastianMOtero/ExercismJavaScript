//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const NUCLEOTIDES_COMPLEMENT = {
  'G' : 'C',
  'C' : 'G',
  'T' : 'A',
  'A' : 'U'
}

export const toRna = (DNAStrand) => {
  return typeof(DNAStrand) === undefined ?
    '' : DNAStrand.split("").map( nucleotide => NUCLEOTIDES_COMPLEMENT[nucleotide]).join("");
};
