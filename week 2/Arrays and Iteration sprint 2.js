// More Practice

// 1.Write a function called min that takes an array as 
// a parameter and returns the smallest number from the array.

function min(array){
    return Math.min(...array)
}

function min2(array) {
var small = array[0]
    for (var i = 1; i < array.length; i++) {
      if(small > array[i])  
        small = array[i]
    }
    return small
 }  
 

//  2.Write a function called max that takes an array as a 
//  parameter and returns the largest number from the array.

function max(array){
 return Math.max(...array)
}

function max2(array) {
    var big = array[0]
        for (var i = 1; i < array.length; i++) {
          if(big < array[i])  
            big = array[i]
        }
        return big
     }  

//  3.Write a function called shortestString that takes an array 
//  of strings as a parameter and returns the length of the shortest
//   string in the given array.

function shortestString(array) {
    var i = 1
    var short = array[0].length
    while(i<array.length){
        if(short > array[i].length) {
            short = array[i].length
        }
        i++
    }
    return short
 }
 
 function shortestString2(array) {
    var i = 1
    var short = array[0]
    while(i<array.length){
        if(short.length > array[i].length) {
            short = array[i]
        }
        i++
    }
    return short
 }
// 4.Write a function called longestString that takes an array of 
// strings as a parameter and returns the length of the longest 
// string in the given array.

function longestString(array) {
    var i = 1
    var long = array[0].length
    while(i<array.length){
        if(long < array[i].length) {
            long = array[i].length
        }
        i++
    }
    return long
 }
 function longestString2(array) {
    var i = 1
    var long = array[0]
    while(i<array.length){
        if(long.length < array[i].length) {
            long = array[i]
        }
        i++
    }
    return long
 }

// 5.Write a function called shortestLongest that takes an array
// of strings as a parameter and returns a new array with the shortest
// and the longest string in the array.

function shortestLongest(array) {
var short = shortestString2(array)
var long = longestString2(array)
var arr = []
arr.push(short)
arr.push(long)
return arr
}

// 6.Write a function called minMax that takes an array as a parameter
//  and returns a new array with the smallest and largest number.

function minMax(array) {
var small = min(array)
var big  = max(array)
var arr = []
arr.push(small)
arr.push(big)
return arr
}  

// 7.Write a function called multiplyBy that takes an array 
// and number as parameters and returns a new array with each
//  of the elements from the array multiplied by the given number.

function multiplyBy(array, number) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
        arr.push(array[i]*number)
    }
    return arr
 }  

//  8.Write a function called multiplyByIndex that takes an array as 
//  a parameter, and multiplies each element with their corresponding 
//  index values then returns that array.

function multiplyByIndex(array) {
    var arr = []
    var i = 0
    while(i < array.length){
        arr.push(array[i]*i)
        i++
    }
    return arr
 }  

//  9.Write a function called lengths that takes an array of strings
//  as a parameter, and returns an array of numbers representing the
//  length of each string.

function lengths(array) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
        arr.push(array[i].length)
    }
    return arr
}

// 10.Write a function called totalNumberOfCharacter that takes an array
// of strings as a parameter, and returns the total number of characters
// of all the strings in the array.

function totalNumberOfCharacters(array) {
    var sum = 0
    var i = 0
    while(i<array.length){
        sum+=array[i].length
        i++
    }
    return sum
 }

// Advanced

// 1.Write a function called filterEvenLengthWords that takes an array 
// of strings as a parameter, and returns an array containing only the 
// elements of the given array whose length is an even number.

function filterEvenLengthWords(array) {
    var arr = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].length% 2 === 0){
            arr.push(array[i])
        }
        
    }
    return arr

 }  

//  2.Write a function called popLastElement that takes an array of 
//  arrays as a parameter, and removes the last element from every 
//  array in the array, and returns the array.

function popLastElement(array) {
    array[array.length-1].pop()
    return array
 } 

//  3.Write a function called pushLastElement that takes an array
//  of arrays and element as a parameter, and adds the element to 
//  the end of every array in the array, and returns the array.

function pushLastElement(array, element) {
    array[array.length-1].push(element)
    return array
 }  

//  4.Write a function called sumArrays that takes an array 
//  of arrays as a parameter, and returns the sum of all elements 
//  in the arrays.

function sumArrays(array) {
    var arr = []
    arr = array.flat(Infinity)
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }
    return sum
}

// 5.Write a function called multiplyBySmallest that takes an array as a
// parameter, and returns a new array with each of the elements from 
// the array multiplied by the smallest number in the array.

function multiplyBySmallest(array) {
    var small = min(array)
    var i =0
    var newArr = []
    while(i < array.length){
        newArr.push(array[i]*small)
        i++
    }
    return newArr
 } 

//  6.Write a function called joinArrays that takes an array of arrays
//  as parameters, and returns a single array containing all the 
//  elements of the nested arrays.

function joinArrays(array) {
    var arr = []
    arr = array.flat(Infinity)
    return arr
 }  
   

//  7.Write a function called sumOddEven that takes an array as
//  a parameter, and returns an array containing the sum of the odd 
//  numbers as the first element and the sum of the even numbers as
//  the second element.

 function sumOddEven(array) {
    var newArr = []
    var Even = 0
    var Odd = 0
    for (var i = 0; i < array.length; i++) {
        if(array[i]%2===0){
            Even += array[i]
        }
        else Odd += array[i]  
    }
     newArr.push(Odd)
     newArr.push(Even)
     return newArr
 } 

//  8.Write a function called shortestOfMixed that takes an array of
//   mixed elements as a parameter, and returns the shortest string 
//   within the given array.

function shortestOfMixed(array){
var short = null
var i = 0
var arr = []
    arr=array.flat(Infinity)
    while(i < arr.length){
        if(typeof arr[i] === "string"){
            if(short === null || short.length > arr[i].length ) {
                short = arr[i]   
            }
        }
        i++
    }
    if(short === null){
        return ''
    }
    else 
    return short
}

// 9.Write a function called smallestOfMixed that takes an array an 
// array of mixed elements as a parameter, and returns the smallest 
// number within the given array. Notes: If the given array is empty,
// it should return 0. If the array contains no numbers, 
// it should return 0.

function smallestOfMixed(array) {
            
var small = null
var arr = []
arr = array.flat(Infinity)
if(arr.length !== 0) {
    for (var i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number"){
            if(small === null || small > arr[i]) {
                small = arr[i]
            }
        }   
        
    }
    if(small === null){
        return 0
    }
    else return small

}
else {
   return 0 
}  
}

// 10. Write a function that reverses the elements of an array in-place
// (i.e., without creating a new array).

function reverseArrayInPlace(arr) {
var i = 0
    while(i < Math.floor(arr.length/2)) {
    const temp = arr[i]
    arr[i] = arr[ arr.length-i-1]
    arr[ arr.length-i-1]= temp
    i++ 
    }
    return arr
  }

// 11. Write a function that rotates the elements of an array to the 
// right by a specified number of positions

function rotateArray(arr, positions) {
    var arr1 = []
    var arr2 = []
    var i = 0
    if (positions > arr.length){
        positions%=arr.length
    }
    for (let i = arr.length - positions; i < arr.length; i++) {   
        arr1.push(arr[i])
    }
    while(i < arr.length - positions){
        arr2.push(arr[i])
        i++
    }
    arr = arr1.concat(arr2)
    return arr
    
  }

//  12. Write a function that checks if an array is a palindrome,
//  meaning it reads the same forwards and backward.

  function isPalindrome(arr) {
    var revArr = []
    var i = 0
    for (let i = arr.length-1; i >=0 ; i--) {
        revArr.push(arr[i])
    }
    while(i < arr.length) {
        if(revArr[i]!==arr[i]){
            return false
        }
        i++
    }
    return true
  }

//  13. Write a function that takes two arrays and returns a new array 
//  scontaining the elements that are common to both arrays.


function arrayIntersection(arr1, arr2) {
    var fuse = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i]===arr2[j]){
                fuse.push(arr1[i])
            }
        }
    }
    return fuse
  }

//  14. Write a function that finds and returns all pairs of elements
//  in an array that sum up to a specific target value.


// function findSumPairs(arr, target) {
//     var i = 0;
//     var newArr = []
//     var newTar = arr[0]
//     while(i<arr.length){
//         i++
//         if(newTar + arr[i] !== target) {
            
//         }
//     } 
//   }