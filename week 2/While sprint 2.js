// Advanced:

// 1.Write a function called sumEven that takes two numbers as 
// parameters and returns the sum of all even numbers starting 
// from num1 and excluding num2.

function sumEven(number1, number2) {
   var i = number1
   var sum = 0
   while (i < number2) {
    if(i%2 === 0) {
        sum = sum + i
    }
    i++
   }
   return sum
 }

//  2.Write a function called primeCounter that takes a number as a 
//  parameter and returns the amount of prime numbers 
//  that occur before it.

function primeCounter(number) {
    var i = 2
    var count = 0
    var j = number
    while(i < number) {
        if( i === j && i%j === 0 ) {
            count++
           
        }
        else return 0
        j--
        i++
    }
    return count
 }