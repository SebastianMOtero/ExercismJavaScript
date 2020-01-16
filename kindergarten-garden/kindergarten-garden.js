//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//
const CLASS = ["alice", "bob", "charlie", "david", "eve", "fred", "ginny", "harriet",
                "ileana", "joseph", "kincaid","larry"];

const PLANTS = {
  'G': 'grass', 
  'C': 'clover', 
  'R': 'radishes', 
  'V': 'violets'
}

export class Garden {

  constructor(diagram, students = CLASS) {
    this.diagram = diagram.split('\n');
    this.students = students.sort().map(name => name.toLowerCase());
    this.amountStudents = (this.diagram[0].length)/2;
    this.assignPlants();
  }

  assignPlants() {
    for (let i = 0; i < this.amountStudents; i++) {
      this[this.students[i]] = [
        this.diagram[0][i*2], this.diagram[0][i*2 + 1],
        this.diagram[1][i*2], this.diagram[1][i*2 + 1]
      ]
      this[this.students[i]] = this[this.students[i]].map(plant => PLANTS[plant]);
    }
  }

}
