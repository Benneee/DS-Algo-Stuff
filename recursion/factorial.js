// Non-recursive solution to factorial => Iterative solution

function nrFactorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// const facNum = nrFactorial(4);
// console.log(facNum);

// Recursive solution to factorial
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

const facNum = factorial(5);
console.log(facNum);
