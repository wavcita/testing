export class StringArrayConverter {
  constructor(private str: string) {}

  public toArray(): string[] {
    return this.str.split('');
  }
}

export class UpperCaseStringArrayConverter extends StringArrayConverter {
  public toArray(): string[] {
    return super.toArray().map(char => char.toUpperCase());
  }
}
