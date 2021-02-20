// Search for a number in an array and exit the loop
let myNumbers = [1, 3, 87550, 69, 5, 33, 59];
let indexOfNumber = -1;

for (let i = 0; i < myNumbers.length; i += 1) {
  if (myNumbers[i] === 5) {
    indexOfNumber = i;
    break;
  }
}

console.log(`The number 5 is in the position ${indexOfNumber}`);