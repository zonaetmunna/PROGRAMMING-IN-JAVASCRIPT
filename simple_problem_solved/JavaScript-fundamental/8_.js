/* Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values. */

/* 
step-1: 
*/

function filterArray(arr, valuesToFilter) {
  return arr.filter((value) => !valuesToFilter.includes(value));
}

const originalArray = [1, 2, 3, 4, 5];
const valuesToFilter = [2, 4];

const filteredArray = filterArray(originalArray, valuesToFilter);
console.log(filteredArray); // [1, 3, 5]
