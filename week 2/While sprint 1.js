// 1.Write a function called sumOfN
//  that takes a number as a parameter 
//  and returns the sum of that number 
//  and all the numbers before it.

var i = 0;
var sum = 0;

function sumOfN(n) {
    while(i <= n) {
        console.log("sum:",sum)
        sum=sum+ i
        i++
        
    }
    return sum

}

// 2.Write a function called 
// factorialOfN that takes a 
// whole number as a parameter 
// and returns the factorial of 
// that number.

var i = 1
var fact = 1
function factorialOfN(n) {
    while(i<=n) {
        console.log("i :",i," fact:",fact)
        fact= i*fact
        i++
    }
    return fact
}

// 3.Write a function called repeatString that
// takes two parameters, as string and a number,
// and returns that string the number of times
// specified in the second parameter.

var i = 0
var res = '';
function repeatString(string, num) {
while(i<num) {
    console.log("i :",i," res:",res)
    res = res + string
    i++
    
}
return res
}  

// 4.Write a function called countMinMax 
// that takes two numbers as parameters 
// and returns the range.

function countMinMax(min, max) {
    var i = min
    var counter = 0
    while(i < max) {
        i++
        counter++
        console.log(counter)
    }
    return counter
 } 

//  5.Write a function called sumMinToMax 
//  that takes two numbers as 
//  parameters and returns the 
//  sum between the two integers 
//  beginning at the num1 
//  and excluding num2.

function sumMinToMax(min, max) {
    var i=min 
     var result =0
    while(i<max){
     result = result + i
            i=i+1
     console.log(result)
    }
    return result
  }


//   6.Write a function called productMinToMax 
//   that takes two numbers as parameters and returns 
//   the product between the two integers 
//   beginning at the num1 and excluding num2.

function productMinToMax(min, max) {
    var i = min 
    var prod = 1
    if(min > 0) {
        while(i < max) {
            prod = prod * i
            console.log(prod)
            i++
        } 
        return prod
    }
   
 }  

//  7.Write a function called multiplyBy10NTimes that
//   takes two numbers as parameters and returns the first number 
//   multiplied by 10 the amount of times
//   indicated by the second number.

function multiplyBy10NTimes(num, n) {
var i = 0
while (i < n)  {
 i ++
 num = num * 10
}  
    return num
 } 

//  8.Write a function called countCharAtIndex that takes three 
//  parameters, a string, an index, and another string. This function
//   should use the index to find the corresponding character in the 
//   first string and loop through the second string and count how many 
//   times that character occurs.

function countCharAtIndex(string1, index, string2) {
    var i = 0
    var count = 0
    var char = string1.charAt(index)
    
    while(i<string2.length) {
        if(char === string2[i]) {
            count++
        }
        i++
        
    }
    return count
 } 

//  9.Write a function called 
//  reverseString that takes a string 
//  as an input and returns that string 
//  in reverse.

function reverseString(string) {
var i = string.length-1
var str = ""
 while(i >=0) {
    str =  str + string[i]
    console.log(str)
    i = i - 1
 }
 return str

 }  

//  10-.Write a function called getIndexOf that takes two parameters, a string,
//   and a character, and returns the first position of the character in that string.


// easiest method to use build in function IndexOf()

function getIndexOf(string, char) {
    return string.indexOf(char) 
     } 

// second method to use a loop

function getIndexOfWhile(string, char) {
var i = 0
var index = -1
while(i < string.length) {
    
    if(char === string [i]) 
        {index = i}
        i++
    } 
         
         return index
         
} 


