export class CharctersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const charcters = this.data.split('');
    const leftHand = charcters[leftIndex];
    charcters[leftIndex] = charcters[rightIndex];
    charcters[rightIndex] = leftHand;

    this.data = charcters.join('');
  }
}
