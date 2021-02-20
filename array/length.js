let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let newArray = array.map(element => element.length);
  newArray = newArray.filter(element => element % 2 !== 0);
  return newArray;
}

console.log(oddLengths(arr));
