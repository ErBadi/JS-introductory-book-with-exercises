let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers (array) {
  function finder(element) {
    if (Number.isInteger(element)) return element;
    else return;
  }
  let integerArray = array.filter(finder);
  return integerArray;
}
things.filter(element => Number.isInteger(element));

console.log(findIntegers(things));