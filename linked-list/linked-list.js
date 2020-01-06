export class LinkedList {
  constructor() {
    this.first = null;
    this.members = 0;
  }

  push(val) {
    //console.log('push');
    if (this.first === null) {
      this.first = new Node(val, null);
    }
    else {
      let current = this.first;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(val, current);
    }
    this.members++;
    //console.log(this.first);
  }

  pop() {
    //console.log('pop');

    let current = this.first;
    if (current === null) {
      return false;
    }

    if (current.next === null) {
      this.first = null;
    }
    while (current.next !== null) {
      current = current.next;
    }
    if (current.previous !== null) {
      current.previous.next = null;
    }
    this.members--;
    //console.log(this.first);
    return current.val;
  }

  shift() {
    //console.log('shift');
    if (this.first === null) {
      return false;
    }

    const val = this.first.val;
    if (this.first.next !== null) {
      const node = this.first.next;
      node.previous = null;
      this.first = node;
    }
    else {
      this.first = null;
    }
    this.members--;
    //console.log(this.first);
    return val;
  }

  unshift(val) {
    //console.log('unshift');
    if (this.first === null) {
      this.first = new Node(val, null);
    }
    else {
      const newNode = new Node(val, null);
      this.first.previous = newNode;
      newNode.next = this.first;
      this.first = newNode;
    }
    this.members++;
    //console.log(this.first);
  }

  delete(val) {
    var newList = new LinkedList();
    var doneDelete = false;
    var node;
    while (node = this.pop()) {
      if (doneDelete === false && node == val) {
        doneDelete = true;
      }
      else {
        newList.push(node);
      }
    }
    this.first = null;
    while (node = newList.pop()) {
      this.push(node);
    }
  }

  count() {
    return this.members;
  }
}

class Node {
  constructor(val, previous){
    this.val = val;
    this.previous = previous;
    this.next = null;
  }
}