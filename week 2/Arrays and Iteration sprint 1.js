// 1.Write a function called arrayFor that takes an array as a parameter,
//  loops through all the elements using For Loop and prints all elements
//   of the array in the console using console.log.

function arrayFor(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
 }  

// 2.Write a function called arrayWhile that takes an array as a 
// parameter, loops through all the elements using While Loop and 
// prints all elements of the array in the console using console.log.

function arrayWhile(array){
    var i = 0
    while(i<array.length){
        console.log(array[i])
        i++
    }
}


// 3.Write a function called sum that takes an array of numbers as a
//  parameter and returns the sum of the numbers in the array.

function sum(array){
var s = 0
    for (var i = 0; i < array.length; i++) {
        s+=array[i]
    }
    return s

}

// 4.Write a function called sumEveryOther that takes an array of 
// numbers as a parameter and returns the summation of every other
// number starting from the beginning of the array.

function sumEveryOther(array){
    var s = 0
    var i = 0
    while(i<array.length)
     {
        s+=array[i]
        i=i+2
    }
    return s
}

// 5.Write a function called sumStartAt that takes an array of numbers,
//  and an index as parameters and returns the summation of every number 
//  starting from the inputted index, until the end of the array.

function sumStartAt(array, index) {
    var sum = 0
 for (let i = index; i < array.length; i++) {
    sum+=array[i]
 }
 return sum
 }  

//  6.Write a function called sumUntil that takes an array of numbers, 
//  and an index as parameters and returns the summation of every number starting
//   from the index 0, until the index parameter.

function sumUntil(array, index) {
    var sum = array[0]
    var i = 0
    while(i<=index-1){
        i++
        sum+=array[i]
    }
    return sum
  }  

//   7.Write a function called subtractReverse that takes an array of 
//   numbers as a parameter and returns the subtraction of every number 
//   beginning at the last element of the input array and ending at the 
//   first element of the input array (in reverse).

function subtractReverse(array) {
    var sub = array[array.length-1]
    for (var i = array.length-2; i >= 0; i--) {
        sub-=array[i]
        
    }
    return sub
 }  

//  8.Write a function called product that takes an array as 
//  a parameter and returns the product of all the elements in the array.

function product(array) {
 var prod = 1
 var i = 0
 while(i<array.length){
    prod*=array[i]
    i++
 }
 return prod
 }  

//  9.Write a function called average that takes an array as a 
//  parameter and returns the average of all the elements in the array.

function average(array) {
    var add = 0
    var avr = 0
    for (let i = 0; i < array.length; i++) {
        add += array[i]
    }
    avr = Math.floor(add / array.length)
    return avr
 }  

//  10.Write a function called square that takes an array as a 
//  parameter and returns a new array where each element is the 
//  square of the element of the given array.

function square(array) {
var i = 0
var newArr = []
while(i<array.length){
    newArr.push(Math.pow(array[i],2))  
    i++
}
    return newArr
 }  

//  11.Write a function called isArray that takes one parameter
//   and returns true if the input is array otherwise returns false.

 function isArray(array) {
    if(Array.isArray(array)){
        return true
    }
    else return false
 } 
 