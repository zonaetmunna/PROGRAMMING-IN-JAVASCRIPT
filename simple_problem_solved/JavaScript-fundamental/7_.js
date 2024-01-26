/* Write a JavaScript program to convert a specified number into an array of digits. */

const digitize = (n) => [...`${n}`].map((i) => parseInt(i));

console.log(digitize(57840));
console.log(digitize(1230));
