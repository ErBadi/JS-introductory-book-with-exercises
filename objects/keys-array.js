let obj = {
  b: 2,
  a: 1,
  c: 3,
};

function keysUpper(obj) {
  let keysArray = Object.keys(obj);
  return keysArray.map(element => element.toLocaleUpperCase());
}

console.log(keysUpper(obj));