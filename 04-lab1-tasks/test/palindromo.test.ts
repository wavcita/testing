// Uso de la clase
import { PalindromeChecker } from "../src/palindromo";
test('task_4', () => {
const word = 'ana';
const checker = new PalindromeChecker(word);
if (checker.isPalindrome()) {
  console.log(`"${word}" es un palíndromo.`);
} else {
  console.log(`"${word}" no es un palíndromo.`);
}

});

