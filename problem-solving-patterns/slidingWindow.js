// Sliding window pattern involves creating a window which can either be an array or number from one position to another. For cases where we're looking for the subset of a data that is continuous in some way, this pattern comes in handy.
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// The pattern is very useful for keeping track of a subset of data in an array or string e.t.c

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// The naive solution
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// const diff = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
// console.log('d: ', diff);

// Sliding window solution
function refMaxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    // We loop over the array one time here
    maxSum += arr[i];
    // console.log('max: ', maxSum);
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // console.log('arr-: ', arr[i - num], 'arr+: ', arr[i]);
    // This line above subtracts the preceding digit in the numbers and adds the next one to the line of numbers for the next sum
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

const diff2 = refMaxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log('e: ', diff2);
