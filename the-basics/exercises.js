// Ex 1
'Antonio ' + 'Balanza';

// Ex 2
let myNumber = 4936;
myNumber;

const ones = myNumber % 10;
ones;

myNumber = (myNumber - ones) / 10;
const tens = myNumber % 10; 
tens;

myNumber = (myNumber - tens) / 10;
const hundreds = myNumber % 10;
hundreds;

const thousands = (myNumber - hundreds) / 10;
thousands;

// Ex 3
typeof true;
typeof false;
typeof 1.5;
typeof 2;
typeof undefined;
typeof { foo: 'bar' };

// Ex 4
console.log('5' + 10); 

console.log('This code logs \'510\' because implicit type coercion converts 10 number data type to \'10\' string data type and joins the two strings')

// Ex 5
console.log(Number('5') + 10);

// Ex 6
console.log(`The value of 5 + 10 is ${Number('5') + 10}`);

//Ex 7
let foo = ['a', 'b', 'c'];
foo;
console.log(`Foo length is ${foo.length}`);  // => 3
console.log(foo[3]);      // will this result in an error?
console.log('An error doesn\'t occur, instead it return undefined.');

// Ex 8
const names = ['rocky', 'maracullá', 'Camolo José Cela'];

// Ex 9
const pets = ['doggo', 'catty', 'armadillo'];

// Ex 12
'12' < '9'
console.log("'12' < '9' returns true since Javascript compares from left to right on strings by individual characters, so '1' < '9'");