// Advanced

// 1.Write a function called stringLength that takes a string as 
// a parameter and returns the length of that string. You cannot 
// use the length property of the string. Instead, you'll need to
// use the string method called .slice().

function stringLength(string,count = 0) {
    if(string ==='') {
        return count
    }


    return  stringLength(string.slice(1),count+1)
 } 

//  2.Write a function called modulo that takes two numbers as
//  parameters and returns the remainder after dividing the first 
//  number by the second number. You cannot use the % operator to 
//  solve this question.


function modulo(number1, number2) {
    if(number2 === 0 ) {
        return "the divisor should never be a 0"
    }
     if(number1 < number2) {
        return number1
     }
     
     return modulo(number1-number2, number2)
 }  

//  3.Write a function called countChars that takes two parameters a 
//  string and a character and returns a number representing the number
//  of times that the character appears in the string. Use the .slice() 
//  method.

function countChars(string, char,count = 0) {

    if(string===''){
        return count
    }
    
    if(string[0]===char) {
        count++
    }
      
        return countChars(string.slice(1),char,count)
    } 


    // 4.Write a function called indexOf that takes two parameters, 
    // a string and a character and returns the index of the first 
    // occurance of the character in the string.

    function indexOf(string, char,index = 0) {
        if(index > string.length){
            return undefined
        } 
        if(string[index]===char){
            return index
        }

        return indexOf(string, char,index+1)
     }  


    //  5.Write a function called power that takes two numbers 
    //  (base & exponent) as parameters and returns the result of 
    //  raising the base to the exponent. The power function in the 
    //  lecture works but can be made considerably faster through a 
    //  method known as successive squaring. To get an idea of how this 
    //  works, observe that: 24 = (22)2 27 = 2(23)2 28 = (24)2 Modify 
    //  the power function to take advantage of this technique.

    function power(base, exponent) {
        if(exponent===0){
            return 1
        } 
        return base * power(base, exponent-1)
     }  


    //  6.Write a function called reverseString that takes a string as
    //  a parameter and returns the reverse of the string.

    function reverseString(string,revStr='',count=string.length-1) {
        if(count < 0){
            return revStr
        }

        return string[count] + reverseString(string,revStr,count-1)
     // return reverseString(string,revStr+string[count],count-1)
     } 

    // 7.Write a function called greatestCommonDivisor that takes two
    // numbers as parameters and returns the greatest common divisor.

    function greatestCommonDivisor(number1, number2) {
        if(number1===0){
            return number2
        }
        if(number2===0){
            return number1
        }
        return greatestCommonDivisor(number2,number1%number2)
     }  

    // 8.Write a function called lowestCommonMultiple that takes two numbers
    // as parameters and returns lowest common multiple Note: Assume
    // that the two numbers are greater than or equal to 2.

    
     
