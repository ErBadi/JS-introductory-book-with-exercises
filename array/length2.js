let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths (arr) {
  let oddArray = [];
  function reducer (accumulator, element) {
    let myElement = element.length;
    //console.log(myElement);
    if (myElement % 2 !== 0) {
      oddArray.push(myElement);
      //console.log(oddArray);
    }
  }
  arr.reduce(reducer, 0);
  return oddArray;
}

console.log(oddLengths(arr));