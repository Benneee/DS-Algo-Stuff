// Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Solution 1: not pointers solution
function countUniqueValues(arr) {
  let store = {};
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    store[value] ? (store[value] += 1) : (store[value] = 1);
  }
  return Object.keys(store).length;
}

// const count = countUniqueValues([-2, -1, -1, 0, 1]);
// const count = countUniqueValues([1, 1, 1, 1, 1, 2]);
// const count = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
// console.log('c: ', count);

// Solution 2: pointers solution
function countUniqueValuesTwo(arr) {
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    let second = arr[i + 1];
    if (first !== second) {
      store.push(first);
      second = arr[i + 1];
    }
  }
  return store.length;
}

// const countTwo = countUniqueValuesTwo([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
// const countTwo = countUniqueValuesTwo([]);
// console.log('c: ', countTwo);

// Colt's solution
function coltCountUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
const countThree = coltCountUniqueValues([]);
console.log('c: ', countThree);
