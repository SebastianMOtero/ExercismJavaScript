//
// This is only a SKELETON file for the 'Nucleotide-Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(pStrand) {
    if(pStrand.match(/[^AGCT]/g) !== null) {
      throw new Error('Invalid nucleotide in strand');
    }
    
    let nucleotides = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    };
    pStrand.split("").map(nucleotide => nucleotides[nucleotide]++);

    return (`${nucleotides.A} ${nucleotides.C} ${nucleotides.G} ${nucleotides.T}`);
  }
}
