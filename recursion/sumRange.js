// Second recursive function

function sumRange(num) {
  // Condition again is the base case
  if (num === 1) return 1;
  //   While the different input here is `num - 1`
  return num + sumRange(num - 1);
}

const value = sumRange(4);
console.log('v: ', value);
