export class PalindromeChecker {
  private word: string;

  constructor(word: string) {
    this.word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  public isPalindrome(): boolean {
    const reverseWord = this.word.split('').reverse().join('');
    return this.word === reverseWord;
  }
}

