/* Write a JavaScript program to extract values at specified indexes from a specified array.*/

//#Source https://bit.ly/2neWfJ2
const pull_at_Index = (arr, pullArr) => {
  let removed = [];
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach((v) => arr.push(v));
  return removed;
};
let array1 = ["a", "b", "c", "d", "e", "f"];
console.log(pull_at_Index(array1, [1, 3]));
let array2 = [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(array2, [4]));
