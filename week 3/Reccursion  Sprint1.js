// 1.Write a function called sum that takes a number as a 
// parameter and returns the sum of all integers up to the given 
// number starting from 0.

function sum(number) {
    if(number === 0) {
        return 0
    }
    return number + sum(number-1)
 }  

//  2.Write a function called factorial that takes a number as 
//  a parameter and returns the factorial of the given number. 
//  The factorial is the product of all the integers before a 
//  given number, starting with 1. The factorial of 0 is 1.

function factorial(number) {
    if( number === 0) {
        return 1
    }
    return number * factorial(number-1)
 } 

//  3.Write a function called repeatString that takes two parameters,
//  a string and a number and returns a new string with the given
//   string repeated the given number of times.

function repeatString(string, number) {
   if(number === 0){
    return ''
   }
   return string  + repeatString(string, number-1)
}  

// 4.Write a function called multiplyBy10 that takes two numbers as 
// parameters and returns the first number multiplied by 10 the
//  amount of times specified by the second number.

function multiplyBy10(firstNumber, secondNumber) {
    if(secondNumber === 0) {
        return firstNumber
    }
    return 10 * multiplyBy10(firstNumber, secondNumber-1)
 }  

//  More Practice

// 1.Write a function called sumBetween that takes two numbers 
// (start and end) as parameters and returns the sum of the numbers
//  from start to end. What happens if the start is larger than the 
//  end? Modify the function to check for this case and, when found,
//   swap the start and end.


function sumBetween(start, end) {
    if(start === end) {
        return start || end
    } 

       return start + sumBetween(start+1, end)
 }  

//  2.Write a function called add that takes two numbers as parameters 
//  and returns their sum. You can only use inc and dec to accomplish 
//  this.

function add(number1, number2) {
    return inc(number1) + dec(number2)

 }  function inc(x) {
    return x + 1 
 }  function dec(x) {
    return x - 1 
 } 

//  3.Write a function called isEven that takes a number as
//  parameter and returns true if that number is even, and 
//  false otherwise; You can not use the modulus % operator

function isEven(number) {
    if(number === 1) {
        return false
    }
    if (number === 0) {
        return true
    }
        
    return isEven(number-2)   
 } 

// 4.Write a function called range that takes two numbers as 
// parameters and returns an array of all the integers between
// the two numbers, excluding both numbers.

function range(start, end) {
    if(start===end-1) {
       return []
    }

    return [start+1].concat(range(start+1, end))
 } 

//  5.Write a function called multiply that takes two numbers as 
//  parameters and returns their multiplication You can not use the
//  multiplication * operator, you must use repeated addition.

function multiply(number1, number2) {
    if(number2===0){
        return 0
    }
    return number1 + multiply(number1, number2-1) 
 } 

 