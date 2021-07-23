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

// Look back and refactor
// We can use regex to weed out punctuation marks and characters that aren't specifically letters or numbers
// Also, instead of using a for-loop, we can use a for-of-loop, this one gives us the character directly...
// since we have no use for the index

function charCountRef(str) {
  // make an object to return at the end
  var result = {};

  // loop over the string, for each character
  for (let char of str) {
    char = char.toLowerCase();
    // - If the char is something else, i.e space, period, e.t.c, do not do anything
    if (/[a-z0-9]/.test(char)) {
      // - If the char is a number or letter AND is a key in the previously created object, add one to count
      // - If the char is a number or letter AND not in object, add it to object and set value to 1
      result[char] = ++result[char] || 1;
    }
  }
  // return object at the end
  return result;
}

const refCount = charCountRef('Hello there!');
console.log('c: ', refCount);
