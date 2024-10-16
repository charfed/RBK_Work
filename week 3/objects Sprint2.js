// Advanced:

// 1.Write a function called isPropertyPresent that takes two
// parameters, an object and a key. It then returns true if there is 
// a property at the given key and false otherwise.

function isPropertyPresent(object,key){
    if(object[key]){
        return true
    }
    else return false
}

// 2.Write a function called getAllKeys that takes an object as 
// a parameter and returns an array of keys of all the properties
// in the object.



function getAllKeys(object){  
    return Object.keys(object)
}

function getAllKeys2(object){
    var arr =[]
    for (var key in object){
        arr.push(key)
    }
    return arr
}




// 3.Write a function called getAllValues that takes an object
//  as a parameter and returns an array of all the values from 
//  that object.

function getAllValues(object){
    return Object.values(object)
}


function getAllValues2(object){
    var arr = []
    for(var key in object){
        arr.push(object[key])
    }
    return arr
}

// 4.Write a function called transformFirstAndLast that takes an 
// array as a parameter and returns an object with one property 
// where: The first element of the array is the key. The last element of
// the array is the value.

function transformFirstAndLast(array){
 var key = array[0]
 var value = array[array.length-1]

 return { [key] : value}
}

// 5.Write a function called extend that takes two objects and adds all 
// the properties of the second object to the first object if the
// property’s key does not already exist.

function extend(obj1,obj2){
    for (var key in obj2){
        if(obj1[key]!==obj2[key]){
            obj1[key] = obj2[key]
        }
    }
    return obj1
}

// 6.Write a function called countAllCharacters that takes a
// string as a parameter and returns an object with each unique 
// character as a key and the value is the amount of times it appears
// in the string. If the string is empty it should return an empty 
// object.

function countAllCharacters(string){ 
    var obj = {}
    if(string.length===0){
        return obj
    }
    for(var char of string){
        if(obj[char]){
            obj[char]=obj[char]+1
        }
        else {
            obj[char]=1
        }
    }
    return obj   
}

// 7.Write a function called countWords that takes a string as a
// parameter and returns an object with each unique word as a key
// and the value is the amount of times it appears in the string 
// If the string is empty it should return an empty object.

function countWords(string){
var obj = {}
var sentence = string.split(' ')
    if (string.length===0){
        return obj
    }
    for (var word of sentence){
        if(obj[word]){
            obj[word]++
        }
        else obj[word]=1
    }
    return obj
}

// 8.Write a function called convertObjectToList that takes 
// an object as a parameter and returns an array where each element 
// is an array with the key as the first element and the value as the
// second.

function convertObjectToList(obj){
var arr = []
for (var key in obj){
    arr.push([key,obj[key]])
}
return arr
}

// 9.Write a function called select that takes two parameters, 
// an object and an array. It then returns a new object with properties 
// from the passed object whose keys were found in the array as elements.

function select(object ,array){
    
}
