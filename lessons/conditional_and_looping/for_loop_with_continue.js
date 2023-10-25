/* for loop with continue */

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip iteration when i is 2
  }
  console.log(i);
}

// Output: 0
//         1
//         3
//         4
