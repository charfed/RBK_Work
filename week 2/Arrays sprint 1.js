// 1. Declare a variable, call it myArray, and assign it to an
//  array that contains three elements.


function assign() {
var array =  [0,1,2]
array.push(3)
console.log()
return array
}

// 2. Refer to the following array for the next 
// three questions: [‘dog’, ‘cat’, ‘fox’, ‘monkey’].
// a- What is the index of 'dog'? 
// b- What is the index of 'fox'? 
// c- What is the index of 'monkey'?

var array = ["dog","cat","fox","monkey"]
console.log("the index of ",array[0])
console.log("the index of ",array[2])
console.log("the index of ",array[3])


// 3. Fix the typos in the following arrays,
//  make it one correct array

// [1, 2, 3 ,4, 5, 6, 7,'The','quick','brown','fox','jumped','over', 'the lazy', 'dog' ,  true , false, true]


// 4. Write a function called emptyArray that takes no parameters 
// and returns an empty array.

function emptyArray() {
var arr = []
return arr
 }  

//  5. Write a function called numbersArray that takes no parameters 
//  and returns an array of numbers from 1 to 5.

function numbersArray(){
var arr = [1,2,3,4,5]
return arr
}

// 7. Write a function called stringsArray that takes no parameters 
// and returns an array of two strings, your first name and last name.

function stringsArray(){
var arr = ["mohamed charfeddine","Chaibi"]
return arr
}

// 8. Write a function called arrayLength that takes an array as 
// a parameter and returns the length of that array.

function arrayLength(arr){
    return arr.length
}