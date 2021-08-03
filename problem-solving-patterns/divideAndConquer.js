// This pattern works by dividing a data set into smaller chunks and then, attending to these smaller set in order to solve the problem

// Sample Problem
// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// Naive solution
function search(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

// The solution above is called Linear search with a time complexity of 0(n)
const searchIndex = search([1, 2, 3, 4, 5, 6], 4);
// console.log('index: ', searchIndex);

// Divide and conquer is employed in Binary Search
// We create a subarray from a major array of sorted values, checking if the middle ground is lesser than our target number, if so, we move to the right or vice-versa.

function refSearch(arr, value) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    console.log('curr: ', currentElement);

    if (currentElement < value) {
      min = middle + 1;
    } else if (currentElement > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
// Time complexity of log(n)
const refSearchIndex = refSearch([1, 2, 3, 4, 5, 6], 4);
console.log('index: ', refSearchIndex);
