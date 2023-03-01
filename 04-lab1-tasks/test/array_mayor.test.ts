const array = [2, 88, 65, 17, 95, 39];
const finder = new NumberFinder(array);
const number = finder.find95();
if (number) {
  console.log(number); // Output: 95
} else {
  console.log('El número no se encontró en el array.');
}
