function multiply(prompt) {
  let rlSync = require('readline-sync');
  let a = question(prompt);
  let b = question(prompt);
  return a * b;
}

let a = multiply('What is the first number? ');
let b = multiply('What is the second number? ')