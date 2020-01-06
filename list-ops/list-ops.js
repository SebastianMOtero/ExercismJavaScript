import { isArray } from "util"
import { timingSafeEqual } from "crypto"

//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list) {
    this.values = list || []
  }

  append(secondList) { 
    secondList.values.map( x => this.values.push(x))
    return this
  }

  concat(listOfLists) {
    listOfLists.values.map( x => { typeof x !== "number" ? this.concat(x) : this.values.push(x) })
    return this
  }

  filter(condition) {
    let aux = [];
    this.values.map( x => { if (condition(x)) { aux.push(x)} })
    this.values = aux
    return this;
  }

  map(condition) {
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = condition(this.values[i])
    }
    return this;
  }

  length() {
    let sn = 0;
    this.values.forEach(element => {
      sn++;
    });
    return sn;
  }


  foldl(callback, init) {
    let x = init;
    for (var i of this.values) {
      x = callback(x, i);
    }
    return x;
  }

  foldr(callback, init) {
    this.reverse();
    return this.foldl(callback, init);
  }

  reverse() {
    var list = [];
    var len = this.values.length;
    for (var i = 0; i < len; i++) {
      list.push(this.values.pop());
    }
    this.values = list;
    return this;
  }
}
