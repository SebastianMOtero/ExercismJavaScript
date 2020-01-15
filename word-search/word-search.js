//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class WordSearch {
  constructor(grid) {
    this.grid = grid;
    this.rows = grid;
    this.clojure = {
      start: [],
      end: [],
    };
  }

  find(word) {
    
    this.rows.map( (row, i) => {
      if (row.includes(word)){
        this.clojure.start.push(i);
        this.clojure.start.push(row.indexOf(word[0]))
        this.clojure.end.push(i)
        //this.clojure.end.push(row.indexOf(word[word]))
      }
    })
  }
}

export default WordSearch;
