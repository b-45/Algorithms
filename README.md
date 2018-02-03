# Algorithms
Javascript Algorithms 

![badge](https://img.shields.io/badge/lesson--notes-javascript-orange.svg)

> Algorithm is a set of rules to accomplish a computational task.

### 1. Reverse string
***

#### Problem Statement
Return a new string with the reversed order of characters.

#### Pseudocode
- declare a function and give it a string as parameter 
- use the `split` method to convert the string into an array
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

### Problem Statement
Write a script that prints the number 1 to n, however for multiples of 3 - print "fizz", for multiples of 5 - print "buzz" and finally for multiples of 3 and 5 - print "fizbuzz".

#### Pseudocode
- declare a function and give it a number as parameter 
- write a for loop to iterate from 1 to n
- write multiple `else if` statements
- condition 1 checks if n modulo 3 and n modulo 5 equals 0 then console log 'fizzbuzz'
- condition 2 checks if n modulo 3 equals 0 then console log 'fizz'
- condition 3 checks if n modulo 5 equals 0 then console log 'buzz'
- else console log any number outside of the aforementioned conditions

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

### 4. Reverse Integer
***

### Problem Statement
Given an integer, return an integer that is reversed while satisfying the following conditions i.e 15 returns 51, -25 returns -52,  100 returns 1.

### Pseudocode
- declare a function and give it a number as parameter 
- use the `toString` method to covert the integer into an string
- use `reverse` method to reverse the string
- use the `join` method to join the string 
- use the `parseInt` method to convert the string back to an integer
- then use the `Math.sign` method to maintain negative numbers

### Code
```
function reverseInt(n) {
  const reverse = n
    .toString()
    .split('')
    .reverse()
    .join('')
return parseInt(reverse) * Math.sign(n)
}
```

### Alternative 
```
function reverseInt(n) {
  const reverse = n
  .toString()
  .split('')
  .reverse()
  .join('')
  
// use the ternary operator to check if the integer is negative
  const checkNegativeSign = n < 0 ? parseInt(reverse) * -1 : parseInt(reverse)  
  return checkNegativeSign
  }
```

### 5. Max Character
***

### Problem Statement
Given a string, return the most repeated character that occurs in the string. i.e "apple" === 'p'

#### Pseudocode
- declare a function and give it a string as parameter 
- using the `for of` loop, generate an object named 'charMap' that maps each character in the string to the object.
- declare a helper variable named 'max' that stores the maximum **value** of the string most repeated in the object.
- declare another helper variable named 'maxChar' that stores the most repeated **character**. 
- iterate through the object using a `for in` loop while incrementing the "max" variable and assigning the "maxChar" variable with the most repeated character.
- return maxChar

#### Code
```
function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    charMap[char] ? charMap[char]++ : charMap[char] = 1
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

```

### 6. Array Chunking
***

### Problem Statement
Given an array and chunk size, divide the array into many subarrays where each subarray is of length size. i.e [1, 2, 3, 4] --> [[1,2], [3, 4]]

#### Pseudocode
- declare a function and give it an `array` and `size` as parameter 
- create a helper variable named `chunked` that stores chunks of subarrays where each array is of length size.
- create another helper variable named `index` starting from 0
- in a `while` loop, iterate from `index` up to length of `array` 
- using the slice method, push slices of subarrays that equals of length `size` into `chunked`
- increment `index` with 'size' to kill the  loop
- return `chunked`


#### Code
```
function chunk(array, size) {
  const chunked = []
  let index = 0

  while (index < array.length) {
  chunked.push(array.slice(index, index + size))
  index += size
  }
  return chunked
}  

```






Resources:


[The Coding Interview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/)


[MDN Javascript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
