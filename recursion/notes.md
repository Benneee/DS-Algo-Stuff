## **Recursion**

#### Taking a problem and chopping it up into smaller pieces until you hit a base case

#### Recursion is a function that calls itself. Recursion can be a cleaner alternative to iterations.

#### It will be seen more with complex data structures

### Examples of common methods that use Recursion

- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal methods/algos

## **Call Stack**

#### The built-in data structure that manages what happens when functions are invoked.

#### When working with Recursion, we will be using the call stack a lot, we keep pushing new functions onto the call stack when we write recursive functions

## **Essential Parts Of A Recursive Function**

- Base case
- Different input

#### The base case represents the condition when the Recursion ends

#### You always want to provide a different input each time you call the recursive function

## **Where Things May Go Wrong**

- No base case
- Forgetting to return or returning the wrong thing
- Stack overflow: 'maximum call size exceeded'

## **Helper Method Recursion**

#### This style is commonly used when we need to compile an array in the function. It consists of an outer method and an inner function, this inner function is what is called recursively.
