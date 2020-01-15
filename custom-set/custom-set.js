//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  constructor(customSet = []) {
    this.set = new Set(customSet);
  }

  empty() {
    return this.set.size === 0;
  }

  contains(element) {
    return this.set.has(element);
  }

  add(element) {
    this.set.add(element);
    return this;
  }

  subset(secondSet) {
    return Array.from(this.set).every(element => secondSet.contains(element));
  }

  disjoint(secondSet) {
    return Array.from(this.set).every(element => !secondSet.contains(element));
  }

  eql(secondSet) {
    return (
      this.set.size === secondSet.set.size &&
      Array.from(this.set).every(element => secondSet.contains(element))
    );
  }

  union(secondSet) {
    return new CustomSet([...Array.from(this.set), ...Array.from(secondSet.set)]);
  }

  intersection(secondSet) {
    return new CustomSet(Array.from(this.set).filter(element => secondSet.contains(element)));
  }

  difference(secondSet) {
    return new CustomSet(Array.from(this.set).filter(element => !secondSet.contains(element)));
  }
}
