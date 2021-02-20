// Detect 0 and -0 without Object.is()

function zeroDetection(number) {
  if (1/number === -Infinity) return true;
  else return false;
}

console.log(zeroDetection(1));