# Algorithms
Javascript Algorithms 

![badge](https://img.shields.io/badge/lesson--notes-javascript-orange.svg)

> Algorithms is a set of rules to accomplish a computational task.

### 1. Reverse string
***

### Pseudocode

Return a new string with the reversed order of characters.

- declare a function and give it a string as parameter 
- use the `split` method to covert the string into an array
- use `reverse` method to reverse the items in the array
- then use the `join` method to convert the array back into a string 
- return the string

### Code
```
function reverse(str) {
    .split('')
    .reverse()
    .join('')
    return str
}
```

### 1. Palindrome
***

### Pseudocode

Palindromes are strings that form the same word if it is reversed. i.e kayak, civic.  Return true if the string is a palindrome or false if it is not.

- declare a function and give it a string as parameter 
- use the `split` method to covert the string into an array
- use `reverse` method to reverse the items in the array
- use the `join` method to convert the array back into a string 
- then check to see if the reversed string and original string is truthy or falsy.

### Code
```
function palindrome(str) {
  let reversed = str.split('').reverse().join('');
    return reversed === str;
}
```








Resource - [
The Coding Interview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/)
