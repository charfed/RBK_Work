// More Practice

// 1. Write a function called firstElement that takes an
//  array as a parameter and returns the first element in that array.

function firstElement(array) {
    return array[0]
 }  
//  2.Write a function called lastElement that takes an array as 
//  a parameter and returns
//   the last element from that array.

function lastElement(array) {
    return array[array.length-1]
}

// 3. Write a function called getNthElement that takes
// two parameters, an array and a number, and returns the element
// in the spot indicated by the number. NOTE: 
// (Remember that index starts at 0).

function getNthElement(array, index) {
    return array[index]
 }  

//  4.Write a function called push that takes two parameters, 
//  an array and a new element, and returns a new array with the 
//  element added to the end.

function Push(arr,el){
    arr.push(el)
    return arr
}

// 5. Write a function called pop that takes an array as a
// parameter and returns a new array with the last element
// removed from it.

function Pop(arr){
    arr.pop()
    return arr
}

// 6. Write a function called unshift that takes two parameters,
//  an array and an element, and returns a new array with the element
//   added to the front.

function unshift(array, element) {
    array.unshift(element)
    return array
 }  

// 7. Write a function called shift that takes an array as a parameter 
// and returns a new array with the first element removed.

function shift(array){
    array.shift()
    return array
}

// 8.Write a function called reassignLast that takes two parameters, 
// an array, and an element, and returns a new array with the last 
// element of the original array replaced with the new element.

function reassignLast(arr,el){
    arr.pop()
    arr.push(el)
    return arr
}

// 9.Write a function called reassignNthElement that takes three 
// parameters, an array, a numerical index and a new value, and 
// returns a new array with the new value in the place of the element
// at the specified index.

function reassignNthElement(array,index,value){
    array.splice(index,1,value)
    return array
}

// Advanced


// 1. Write a function called indexOf that takes two parameters, 
// an array, and an element, and returns the index of the array where
//  the element is located.

function indexOf(array,el) {
return array.indexOf(el)
}

// 2. Write a function called addElement that takes three parameters,
//  an array, an index and an element, and returns an array with that 
//  element added in the place of that index but nothing in the array 
//  is removed. NOTE: Please use this exercise to practice .splice()

function addElement(array,index,element){
    array.splice(index,0,element)
    return array
}

// 3. Write a function called removeElement that takes two parameters,
// an array and an index, and returns an array with the element in thatù
// index removed. NOTE: Please use this exercise to practice .splice()

function removeElement(array,index){
    array.splice(index,1)
    return array
}


// 4. Write a function called concatArrays that takes two parameters,
//  two arrays, and returns a new array that combines all elements of 
//  the two parameters

function concatArrays(array1, array2) {
    var arr = []
    arr = array1.concat(array2)
    return arr
 }  

//  5. Write a function called concatThreeArrays that takes three 
//  parameters, three arrays, and returns a new array that combines 
//  all elements of the two parameters

function concatThreeArrays(array1,array2,array3) {
    var arr = []
    arr = array1.concat(array2)
    arr = arr.concat(array3)
    return arr
 }  


//  6. Write a function called joinStrings that takes two parameters, 
//  an array of strings and one string, and returns a new string that 
//  combines all of the strings from the array separated by the string 
//  parameter.

function joinStrings(array, string) {
    var str = ''
    str = array.join(string)
    return str 
 }  

//  7.Write a function called applySplit that takes two parameters, 
//  a string to be split and a splitter (which is also a string), 
//  and returns an array that is the result of splitting the string
//   on the splitter. 


function applySplit(string, splitter) {
    return string.split(splitter)
 }  

//  8. Write a function called getElementsAfter that takes two parameters
//  , an array and index, and returns an array with all the elements 
//  after the index but does not include the element at the given index.

function getElementsAfterOld(array, index) {
    var newArr = []
    var i = index + 1
    while(i < array.length){
        newArr.push(array[i])  
     i++
    }
    return newArr
 } 

 function getElementsAfterImproved(array, index){
    return array.splice(index+1)
}

//  9. Write a function called getElementsBefore that takes
//   two parameters, an array and index, and returns an array with
//    all the elements before the index but does not include 
//    the element at the given index.


function getElementsBefore(arr,index){
    var newArr= []
    for (var i =0 ; i < index; i++) {
        newArr.push(arr[i])
        
    }
    return newArr
}

// 10. Write a function called getAllElementsButFirst that 
// takes an array as parameter and returns an array with all 
// the elements except the first element.

function getAllElementsButFirst(array) {
    array.shift()
    return array
 }  

//  11. Write a function called getAllElementsButLast that takes an
//   array as a parameter and returns an array with all the elements 
//   but the last element.

function getAllElementsButLast(array) {
    array.pop()
    return array
 }  


//  12. Write a function that reverses the elements in an array
//   without using the reverse() method.

function reverseArray(arr) {
    var RevArr = []
    for (var i = arr.length-1 ; i >=0 ; i--) {
        RevArr.push(arr[i])
    }
    return RevArr
  }

//   13. Write a function that takes an array of words and returns a
//    new array with the length of each word.

function wordLengths(arr) {
    var newArr = []
    var i = 0
    while(i<arr.length){
        newArr.push(arr[i].length)
        i++
    }
    return newArr
  }

//   14. Write a function that duplicates each element in an 
//   array and returns a new array with the duplicated elements.

function duplicateArrayElements(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
        newArr.push(arr[i])
    }
    return newArr
  }

//   15. Write a function that flattens a nested array and returns 
//   a new array with all the elements at the top-level.

// build-in method

function flattenArray(arr) {
    var NewArr = []
    return NewArr = arr.flat(Infinity)
}

// second method

// function flattenArray2(arr){
//     var NewArr = []
//     var el = 0
//     for (var i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
         
//             el = arr[i].flat()
//             NewArr.push(el)
//         }
//         else 
//             el = arr[i]
//             NewArr.push(el)
//     }
//     return NewArr
// }


// 16. Write a function that removes duplicate elements from an 
// array and returns a new array with only the unique elements

function removeDuplicates(arr) {
var i = 0
 while(i<arr.length){
    if(arr[i] === arr[i+1]){
        arr.splice(i,1)
    }
    i++
 }
 return arr
    
  }