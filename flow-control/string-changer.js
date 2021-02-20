// Let's return an uppercase string if it's longer than 10 characters
function stringModifier(myString) {
  if (myString.length > 10) {
    myString = myString.toUpperCase();
  } 
  return myString;
}

console.log(stringModifier('goodbye'));
console.log(stringModifier('Hello World!'));