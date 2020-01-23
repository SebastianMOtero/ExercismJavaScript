//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
    constructor(positioning = { white: [0, 3], black: [7, 3] } ) {
        if (positioning.white.toString() === positioning.black.toString()) {
            throw new Error("Queens cannot share the same space");
        };
        this.white = positioning.white;
        this.black = positioning.black;       
    }

    toString() {
        let board = [];
        for (let i = 0; i < 8; i++) {
            let row = [];
            for (let j = 0; j < 8; j++) {
                row.push("_")           
            } 
            board.push(row)     
        }
        board[this.white[0]][this.white[1]] = 'W';
        board[this.black[0]][this.black[1]] = 'B';
        return board.map(x => x.join(' ') +"\n").join('');
    }

    canAttack() {
        let posX = Math.abs(this.white[0] - this.black[0]);
        let posY = Math.abs(this.white[1] - this.black[1]);
        return (posX === posY || posX === 0 || posY === 0);
    }
}
