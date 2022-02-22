'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CharctersCollection = void 0;
class CharctersCollection {
  constructor(data) {
    this.data = data;
  }
  get length() {
    return this.data.length;
  }
  compare(leftIndex, rightIndex) {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex, rightIndex) {
    const charcters = this.data.split('');
    const leftHand = charcters[leftIndex];
    charcters[leftIndex] = charcters[rightIndex];
    charcters[rightIndex] = leftHand;
    this.data = charcters.join('');
  }
}
exports.CharctersCollection = CharctersCollection;
