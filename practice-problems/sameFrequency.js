// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. (Frequency Counter pattern)

function sameFrequency(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const counter1 = {};
  const counter2 = {};

  for (let val of String(first)) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of String(second)) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  for (let key in counter1) {
    if (!key in counter2) {
      return false;
    }
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }
  return true;
}

sameFrequency(182, 281); // true
// sameFrequency(34, 14) // false
