// Anagram using the frequency counter pattern
// An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema formed from iceman

// Given two strings, write a function to determine if the second string is an anagram of the first

// Steps

// Create two container objects
// Create frequencies for the strings
// - loop through each string to populate the container objects with their value and counter
// - loop again through the created objects to check if the value in one is in the other and whether the count matches too
// - count must match and characters must be equal to each other regardless of placement
// Return true if conditions in the aforementioned steps pan out correctly or false if otherwise

// My Solution
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};

  for (let val of str1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of str2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  for (let key in counter1) {
    if (!(key in counter2)) {
      return false;
    }
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }
  return true;
}

const valid = validAnagram('cinema', 'iceman');
console.log('validity: ', valid);

// Colt's Solution
function refValidAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

const refValid = refValidAnagram('cinema', 'iceman');
console.log('validity: ', refValid);
