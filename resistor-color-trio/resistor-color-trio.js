//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLOR_VALUE = ["black", "brown", "red", "orange", "yellow", 
                    "green", "blue", "violet", "grey", "white"];

export class ResistorColorTrio {
  constructor(pColors) {
    if (pColors.some(color => COLOR_VALUE.indexOf(color) === -1)) { throw new Error("invalid color")};
    this.value = COLOR_VALUE.indexOf(pColors[0]) * 10 + COLOR_VALUE.indexOf(pColors[1]);
    this.value *= Math.pow(10, COLOR_VALUE.indexOf(pColors[2]));
  }

  get label() {
    return this.value >= 1000 ? 
      `Resistor value: ${this.value/1000} kiloohms`  : 
      `Resistor value: ${this.value} ohms`
  }
}
