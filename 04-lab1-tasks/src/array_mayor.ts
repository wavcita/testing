export class ArraySearcher {
  constructor(private array: number[]) {}

  public findNumber(number: number): number | undefined {
    return this.array.find(num => num === number);
  }
}

class NumberFinder extends ArraySearcher {
  public find95(): number | undefined {
    return this.findNumber(95);
  }
}
