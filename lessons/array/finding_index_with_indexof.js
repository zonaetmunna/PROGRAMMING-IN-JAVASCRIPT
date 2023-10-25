/* Finding Index with indexOf */

let animals = ["cat", "dog", "elephant", "dog"];

let indexOfDog = animals.indexOf("dog"); // Get the index of "dog"
let indexOfLion = animals.indexOf("lion"); // Lion is not in the array

console.log(indexOfDog);   // Output: 1 (index of the first "dog")
console.log(indexOfLion);  // Output: -1 (not found)
