//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  constructor(input) {
    this.list = [];
    this._head = null;
    if (input !== undefined) {
      input.map( data => {this.add(new Element(data))} );
    }
  }

  add(element) { 
    element.next = this.head;
    this.list.push(element);
    this._head = element;
  }

  get length() {
    return this.list.length;
  }

  get head() {
    return this._head;
  }

  toArray() {
      return this.list.map( x => x.value).reverse()
    
  }
}

