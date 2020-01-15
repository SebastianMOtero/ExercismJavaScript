//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Node {
  constructor(next) {
    this.value = undefined;
    this.next = next;
  }
}

class CircularBuffer {
  constructor(size) {
    this.head = new Node(undefined);
    this.nodeFree = this.head;
    for (let i = 1; i < size; i++) {
      let newNode = new Node(this.nodeFree);
      this.nodeFree = newNode;
    }
    this.head.next = this.nodeFree;
    this.nodeFree = this.head
  }

  write(strValue) {
    if (strValue === null || strValue === undefined) { return; };
    if (this.nodeFree.value !== undefined) { throw new BufferFullError(); };
    this.nodeFree.value = strValue;
    this.nodeFree = this.nodeFree.next;
  }

  read() {
    if (this.head.value === undefined) { throw new BufferEmptyError(); }; 
    let num = this.head.value;
    this.head.value = undefined;
    this.head = this.head.next;
    return num; 
  }

  forceWrite(strValue) {
    if (this.nodeFree.value === undefined) { this.write(strValue); return; };
    this.nodeFree.value = strValue;
    this.nodeFree = this.nodeFree.next;
    this.head = this.nodeFree
  }

  clear() {
    while (this.head.value !== undefined) {
      this.head.value = undefined;
      this.head = this.head.next;
    }
    this.nodeFree = this.head;
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    super('buffer full')
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super('Buffer empty')
  }
}
