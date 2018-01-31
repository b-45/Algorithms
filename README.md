# Algorithms
Javascript Algorithms 

![badge](https://img.shields.io/badge/lesson--notes-javascript-orange.svg)

> Algorithm is a set of rules to accomplish a computational task.

### 1. Reverse string
***

#### Problem Statement
Return a new string with the reversed order of characters.

### Pseudocode
- declare a function and give it a string as parameter 
- use the `split` method to covert the string into an array
- use `reverse` method to reverse the items in the array
- then use the `join` method to convert the array back into a string 
- return the string

#### Code
```
function reverse(str) {
    .split('')
    .reverse()
    .join('')
    return str
}
```

### 2. Palindrome
***

#### Problem Statement
Palindromes are strings that form the same word when reversed. i.e kayak, civic.  Return true if the string is a palindrome or false if it is not.

#### Pseudocode
- declare a function and give it a string as parameter 
- use the `split` method to covert the string into an array
- use `reverse` method to reverse the items in the array
- use the `join` method to convert the array back into a string 
- then check to see if the reversed string and original string is truthy or falsy.

#### Code
```
function palindrome(str) {
  let reversed = str.split('').reverse().join('');
    return reversed === str;
}
```

### 3. Fizzbuzz
***

#### Problem Statement
Write a script that prints the number 1 to n, however for multiples 3 print "fizz", for multiples of 5 - print "buzz" and finally for multiples of 3 and 5 - print "fizbuzz".

#### Pseudocode
- declare a function and give it a number as parameter 
- write a for loop to iterate from 1 to n
- write multiple if else statements
- condition 1 checks if n modulo 3 and n modulo 5 equals 0 then console log 'fizzbuzz'
- condition 2 checks if n modulo 3 equals 0 then console log 'fizz'
- condition 3 checks if n modulo 5 equals 0 then console log 'buzz'
- else console log number

#### Code
```
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
```








Resource - [
The Coding Interview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/)
