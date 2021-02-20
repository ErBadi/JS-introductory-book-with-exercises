// Generating a random number between a minimum and a maximum
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = 0;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log(`It took ${tries} times to arrive at a number greater than 2, that number was ${result}`);