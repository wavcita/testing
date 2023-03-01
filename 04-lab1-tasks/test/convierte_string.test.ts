const string = 'Hello';
const converter = new UpperCaseStringArrayConverter(string);
const array = converter.toArray();
console.log(array); // Output: ["H", "e", "l", "l", "o"]
