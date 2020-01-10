//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Forth {

  constructor() {
    this._stack = [];
    this._customOp = {}
  }

  evaluate(input) {
    input = input.split(" ");

    const arithmeticOp = new RegExp(/\+|\-|\*|\//);
    const stackOp = new RegExp(/dup|drop|swap|over/);
    const num = new RegExp(/\-?\d/);

    if (Object.keys(this._customOp).length >= 1) {
      input.map((x,i )=> {
        if (this._customOp[x] !== null) {
          let aux = input.split(x);
          let aux2 = aux[0].concat(this._customOp[x]);
          aux2 = aux.concat(aux)
          
        } 
      })
    }

    console.log(input);

    if (input[0] === ':') {
      input.pop();
      this._customOp[input[1]] = [];
      for (let i = 2; i < input.length; i++) {
        this._customOp[input[1]].push(input[i]);
      }
      console.log(this._customOp);
    } else {
      
      for (let i = 0; i < input.length; i++) {
          if(input[i].match(num)) { 
            this._stack.push(parseInt(input[i]))
          } 
          if(input[i].match(arithmeticOp)) {
            if (this._stack.length < 2) { throw new Error('Stack empty') }
            else {
              this._stack[this._stack.length-2] = this.arithmeticOperation(input[i], this._stack[this._stack.length-2], this._stack[this._stack.length-1])
              this._stack.pop();
            }
          }
          if(input[i].match(stackOp)) {
            this.stackOperation(input[i]);
          }
        }      
    }

    }
  
    //.map(num => this._stack.push(parseInt(num)))
  //dup 1 en stack
  //drop 1 en stack
  //swap 2 en stack
  //over 2 en stack
  stackOperation(op) {
    if(this._stack.length === 0) { throw new Error('Stack empty')}
    switch (op) {
      case 'dup': this._stack.push(this._stack[this._stack.length-1]); break;
      case 'drop': this._stack.pop(); break;
      case 'swap': {
        if(this._stack.length < 2) { throw new Error('Stack empty')};
        let aux = this._stack[this._stack.length-2] ;
        this._stack[this._stack.length-2] = this._stack[this._stack.length-1];
        this._stack[this._stack.length-1] = aux;
        break;
      }
      case 'over': {
        if(this._stack.length < 2) { throw new Error('Stack empty')};
        this._stack.push(this._stack[this._stack.length-2]);
        break;
      }
      default:
        break;
    }
  }

  arithmeticOperation(op, val1, val2) { 
    switch (op) {
      case '+': return val1+val2;
      case '-': return val1-val2;
      case '*': return val1*val2
      case '/': 
        if (val2 === 0) { throw new Error('Division by zero')}
        else { return parseInt(val1 / val2) };
      default:
        break;
    }
  }
  
  get stack() {
    return this._stack;
  }

}
