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

function IsPrime(num) {
var i = 2
    if(num < 2) {
    return false
}
while(i <= Math.sqrt(num)){
    if(num% i === 0){
        return false
    }
    i++
}
return true

}

function primeCounter(num){
    var count
    for (var i = 2; i < num; i++) {
        if(IsPrime(num)) {
            count++
        }
    }
    return count

}

// 3.Write a function called sumOfFirstAndLast that takes a number
// as a parameter and returns the sum of the first and last digits.
// Please do this without turning the number into a string.


function sumOfFirstAndLastWhile(num) {
    var first = 0
    var last = num % 10
    var sum = 0
    
    if(num < 10 ) {
        return num
    }
    
    while (num >=10) {
        num = Math.floor(num/10)
    }
    first = num
    sum = first + last
    return sum
    }

    // 4. Write a program that reads a character for playing the game 
    // of Rock-Paper-Scissors. If the character entered by the user is
    // not one of 'P', 'R' or 'S', the program keeps on prompting the
    // user to enter a new character.

  