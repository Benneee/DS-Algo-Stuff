/**
 * Problem Solving Strategies
 *
 * Understand the problem
 * Explore concrete examples
 * Break it down
 * Solve / Simplify
 * Look back and refactor
 */

// Simplifying the problem
// For now, we will assume that detecting values are neither alphabets nor numbers is a difficulty
// So we solve the parts of the problem we already understand and ignore the difficult section of the problem... for now
function charCount(str) {
  // make an object to return at the end
  var result = {};

  // loop over the string, for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // - If the char is a number or letter AND is a key in the previously created object, add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      // - If the char is a number or letter AND not in object, add it to object and set value to 1
      result[char] = 1;
    }
  }
  // - If the char is something else, i.e space, period, e.t.c, do not do anything
  // return object at the end
  return result;
}

const count = charCount('Hello there!');
console.log('c: ', count);
