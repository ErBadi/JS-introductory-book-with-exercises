let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(sourceObject, keys) {
  let destinationObject = {};
  if(keys) {
    keys.forEach(key => destinationObject[key] = sourceObject[key]);
    
    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3); 