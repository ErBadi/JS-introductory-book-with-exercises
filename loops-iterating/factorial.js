// Using a loop (not recursion) to solve a factorial problem
function factorial(number) {
  let i = 1;
  let multiplication = 1;
  while (i <= number) {
    multiplication = multiplication * i;
    i += 1;
  }
  return multiplication;
}

console.log(factorial(8));