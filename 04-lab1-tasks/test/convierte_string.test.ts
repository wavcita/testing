import { StringArrayConverter, UpperCaseStringArrayConverter } from "../src/convierte_string";
test('test_6', () => {
const string = 'Hello';
const converter = new UpperCaseStringArrayConverter(string);
const array = converter.toArray();
console.log(array); // Output: ["H", "e", "l", "l", "o"]
});

