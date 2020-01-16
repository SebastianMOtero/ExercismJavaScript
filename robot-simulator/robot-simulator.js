//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor() {
    super();
  }
}

const directions = ['north', 'east', 'south', 'west']

const INS = {
  'A': "advance",
  "L": "turnLeft",
  "R": "turnRight"
}

export class Robot {
  constructor() {
    this.facing = 'north';
    this.at(0, 0)
  }

  orient(direction) {
    if (directions.indexOf(direction) === -1) { throw new InvalidInputError()}
    this.facing = direction;
  }

  get bearing() {
    return this.facing;
  }

  get coordinates() {
    return this.location;
  }

  turnRight() {
    this.facing = directions[((directions.indexOf(this.facing)+1) % 4)];
  }

  turnLeft() {
    this.facing = directions[((directions.indexOf(this.facing)+3) % 4)];
  }

  at(x, y) {
    this.location = [x, y]
  }

  advance() {
    switch (this.facing) { 
      case 'north':
        this.location[1]++;
        break;
      case 'east':
        this.location[0]++;
        break;
      case 'south':
        this.location[1]--;
        break;
      case 'west':
        this.location[0]--;
        break;
      default:
        break;
    }
  }

  static instructions(input) { 
    return input.split("").map(x => INS[x])
  }

  place(data) {
    this.orient(data.direction);
    this.at(data.x, data.y);
  }

  evaluate(dataInstructions) {
    Robot.instructions(dataInstructions).map( ins => this[ins]());
  }
}
