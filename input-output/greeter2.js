function getName (prompt) {
  let rlSync = require('readline-sync');
  let firstName = rlSync.question(prompt);
  let secondName = rlSync.question(prompt);
}

let firstName = getName('What is your first name? ');
let secondName = getName('What is your second name? ');
console.log(`Wow ${firstName} ${secondName} it's great to see you again dude!!!`);