/* handle multiple condition with nested if, else if, else */

let temperature = 25;
let isSunny = true;

if (isSunny) {
  if (temperature > 30) {
    console.log("It's hot and sunny.");
  } else if (temperature >= 20) {
    console.log("It's warm and sunny.");
  } else {
    console.log("It's a bit chilly but sunny.");
  }
} else {
  console.log("It's not sunny.");
}
