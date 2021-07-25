// Frequency Counter problem solving pattern

// write a function same which accepts two arrays. The function should return true if every value in the array has its corresponding squared value in the second array. The frequency (array length) must be the same

// Function takes in two arrays and returns true or false if the two arrays are similar in that array B contains squared values of the values in array A.

// same([1, 3, 5], [9, 1, 25]) // true
// same([2, 3, 4], [4, 9]) // false

// Steps - My Solution
// Establish the arguments passed in are arrays
// Check that the length of both arrays are the same
// Create a container variable
// - Loop through the arrays
// - This container variable will compare the value of both arrays
// - Take the first value, square it and use that value to loop through the content of the second array
// - If the squared value is found in second array, push it into container
// - If at the end of the loop, container has the same length as array A, all good
// - At the end of the loop, if the above condition is same for all the array values, we return true
// Return true or false depending on the steps above

// This solution is O(n ^ 2)
function same(A, B) {
  let container = [];
  if (Array.isArray(A) && Array.isArray(B)) {
    if (A.length === B.length) {
      for (let j = 0; j < A.length; j++) {
        let squaredValue = squareIt(A[j]);
        B.forEach((sqr) => {
          if (squaredValue === sqr) {
            container.push(A[j]);
          }
        });
      }
      return container.length === A.length;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function squareIt(number) {
  return number ** 2;
}

const val = same([1, 3, 5], [9, 1, 25]);
console.log('v: ', val);

// The O(n) solution

// Nested loops will always return quadratic o of n
// Using objects here is efficient for the checks we need
function sameRef(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // Increase the count if the value exists in the object
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // Check if the square of the value in arr1 is in arr2
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // Check if the count of the value in arr2 matches that of arr1
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

const valRef = sameRef([1, 3, 5], [9, 1, 25]);
console.log('v: ', valRef);
