// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. (Frequency Counter or Multiple Pointers)

let sortedNumbers = Array.from(arguments).sort();
let store = [];
for (let i = 0; i < sortedNumbers.length; i++) {
  let first = sortedNumbers[i];
  let second = sortedNumbers[i + 1];
  if (first === second) {
    store.push(first);
    second = sortedNumbers[i + 1];
  }
}
return store.length >= 1 ? true : false;

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
