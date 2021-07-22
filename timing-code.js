// Add up numbers
// Solution 1: involves a loop
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// console.log(addUpTo(4));

// Solution 2: no loop, uses a math formula instead
function addUpToo(n) {
  return (n * (n + 1)) / 2;
}

// Timing
// performance.now() will run in the browser
let t1 = performance.now();
console.log(addUpToo(4));
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
