//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
  constructor(value) {
    this.head = {
      data : value,
      // left : undefined,
      // right : undefined
    }
    this.currentNode = this.head;
  }

  get data() {
    return this.currentNode.data;
  }

  get right() {
    return this.currentNode.right;
  }

  get left() {
    return this.currentNode.left;
  }

  insert(pValue) {
    let newNode = {
      data : pValue,
      // left : undefined,
      // right : undefined
    }
    
    let currentNode = this.head;

    while (currentNode) {
      if (pValue <= currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }
}
