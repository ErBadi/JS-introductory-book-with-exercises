// Creating a function to determine if a number is even or odd
function evenOrOdd(number) {
  if (Number.isInteger(number) !== true) {
    console.log('This is not an integer');
    return;
  } else if (number % 2 === 0) {
    console.log('The number is even');
  } else {
    console.log('The number is odd');
  }
}

evenOrOdd(10.2);