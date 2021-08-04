// Given an array of integers and a number, write a function called maxSubarraySum which finds the maximum sum of subarray with the length of the number passed to the function

// Note that a subarray must consist of consecutive elements from the original array

function maxSubarraySum(arr, count) {
  let maxiSum = 0;
  let tempSum = 0;

  if (arr.length < count) return null;

  for (let i = 0; i < count; i++) {
    maxiSum += arr[i];
  }
  tempSum = maxiSum;

  for (let i = count; i < arr.length; i++) {
    tempSum = tempSum - arr[i - count] + arr[i];
    maxiSum = Math.max(maxiSum, tempSum);
  }

  return maxiSum;
}
