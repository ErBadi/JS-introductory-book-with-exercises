// Using readline-sync to input text through command line.
let rlSync = require('readline-sync'); // The require function can be used since we installed the package with --save flag into node_modules.
// require function imports readline-sync into the program assigning it to an object so we can call methods.
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);