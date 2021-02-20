/* This was my solution, I also introduce the one in the exercise's solutions 
as it is a different interesting approach
function multiply(prompt1, prompt2) {
  let rlSync = require('readline-sync');
  let a = rlSync.question(prompt1);
  let b = rlSync.question(prompt2);
  let multiply = a * b;
  console.log(`${a} * ${b} = ${multiply}`);
  return multiply;
}

let a = multiply('What is the first number? ', 'What is the second number? ');
*/

// Here it goes
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let number = parseFloat(rlSync.question(prompt));
  return number;
}

let left = getNumber('What is the left number? ');
let right = getNumber('What is the right number? ');

console.log(`${left} * ${right} = ${multiply(left, right)}`);
