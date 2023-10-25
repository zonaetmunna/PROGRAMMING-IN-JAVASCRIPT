/* loop with while and continue */


let num = 0;

while (num < 5) {
  num++;
  if (num === 2) {
    continue; // Skip iteration when num is 2
  }
  console.log(num);
}

// Output: 1
//         3
//         4
//         5
