// Uso de la clase
test('task 4', () => {
const word = 'ana';
const checker = new PalindromeChecker(word);
if (checker.isPalindrome()) {
  console.log(`"${word}" es un palíndromo.`);
} else {
  console.log(`"${word}" no es un palíndromo.`);
}

});

