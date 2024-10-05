// 1.Write a function called isLessThan that takes two numbers as 
// parameters and returns true if num1 is less than num2 and false if otherwise.

function isLessThan(num1, num2) {
    if(num1 < num2) {
        return true
    }
    else return false

}

// 2.Write a function called isEqualTo that takes two numbers as parameters and 
// returns true if num1 is equal to num2 and false if otherwise.

function isEqualTo(num1, num2) { 
    if(num1 === num2) {
        return true
    }
    else return false
    
   }

//  3.Write a function called isOldEnoughToDrive that 
//  takes an age as a parameter and returns true 
//  if the person’s age is old enough to drive. Note: In Jordan,
//  you can get a driving licence when you’re 18.

function isOldEnoughToDrive(age) {
    if(age >= 18) {
        return true

    }

    else return false
 
} 

// 4.Write a function called isValidPassword that takes a password as a 
// parameter and returns true if that password 
// is equal to or longer than 8 characters and false 
// if the password is less than 8

function isValidPassword(password) {
    if(password.length >= 8) {
        return true
    }
    else return false
   }

//  5.Write a function called longerString that takes two strings 
//  as parameters and returns the longest string and returns 
//  “both” if they are the same length.

function longerString(string1, string2) {
    if(string1.length > string2.length) {
        return string1
    }
    else if(string1.length < string2.length) {
        return string2
    }
    else return "both"
}

// 6.Write a function called opposite, that takes a 
// boolean value as a parameter and 
// returns the opposite of that value.

function opposite(boolean) {
    if (boolean === true) {
        return false
    }
    else if (boolean === false) {
        return true
    }
    
}

// Advanced


// 1.Write a function called rectAreaGreaterThan50 that takes the
//  length and width of a rectangle and returns true if its area 
//  is greater than or equal to 50, and false if it's less than 50.


function rectAreaGreaterThan50(length, width) {
    if(length * width >= 50) {
        return true
    }
    else return false
}

// 2.Write a function called budgetStatus that takes a number as 
// a parameter, and returns a string stating the status of your budget. 
// If the number is greater than 250, the result should 
// be an "over budget", If the number is less than or equal to 250, 
// the result should be an "Under budget".

function budgetStatus(number) {  
    if(number > 250) {
        return "over budget"
    }
    else return "Under budget"

} 

// 3.Write a function called isTriangle that takes three integers 
// as parameters and returns true if they can form the sides of a 
// triangle (the sum of any two sides should
// be greater than the third side), 
// and false if they cannot form a triangle.

function isTriangle(side1, side2, side3) { 
        if(side1+side2 > side3) {
            return true
        }
        else return false
     }

// 4.Write a function called getMax that takes three numbers as 
// parameters and returns the maximum of the three numbers using 
// conditional statements 
// (not using Math.max())

function getMax(number1 , number2 , number3) {
    if(number1 > number2){
        return number1
    }
    else if(number2 > number1){
        return number2
    }
    else if(number2 > number3){
        return number2
    }
    else if(number3 > number1){
        return number3
    }
    else if(number3 > number2){
        return number3
    }
    else if(number1 === number2 === number3){
        return number1
    }
 } 

//  5. Write a function called isLeapYear that takes a year as 
//  a parameter and returns true if it's a leap year, and false 
//  if it's not. A leap year is divisible by 4 but 
//  not divisible by 100 unless it is 
//  also divisible by 400.

function isLeapYear(year) {
    if(year % 4 === 0) {
        return true
    }
    else if(year % 100 !== 0 && year % 400 ===0) {
       return true
    }
    else
     return false
  }

  