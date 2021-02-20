let array = [3, 5, 7];

let reducer = (accumulator, currentValue) => accumulator + currentValue * currentValue;

console.log(array.reduce(reducer, 0));