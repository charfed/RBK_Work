// 1.Write a function called returnTrue that takes 
// no parameters and returns true when invoked.

function returnTrue(){

    return true
    
  }
  returnTrue();
//   returnTrue() -> true




// 2.Write a function called returnFalse 
// that takes no parameters and returns false when invoked.

function returnFalse(){

    return false
    
  }
  returnFalse();
//   returnTrue() -> false


// 3.Write a function called isEven that takes 
// a number as a parameter and returns true if the number is even and false if it is odd.

function isEven(n){
    if(n%2===0){
        return true

    }
    // if(!n) {
    //   return true
    // }
    return false
}
// isEven(2) -> true isEven(3) -> false

// 4.Write a function called isOdd that 
// takes a number and returns true if the number is odd and false if it is even.

function isOdd(n){
  if(n%2!==0){
      return true

  }
  return false
}
// isOdd(3) -> true 
// isOdd(2) -> false  

// 5.Write a function called isGreaterThan10 that takes a number as a parameter 
// and returns true if the number is greater than 10 and false if it is not.

function isGreaterThan10 (number) {
  if(number > 10) {
    return true
  }
  else return false

}

// 6.Write a function called isLessThan30 that takes a number as a parameter and returns
//  true if the number is less than 30 and false if it is not.

function isLessThan30(number) {

  if(number < 30) {
    return true
  }

  else return false
  
 }

//  7.Write a function called isEqualTo10 that takes a number 
// as a parameter and returns true if the number is equal to 10 and false if it is not


 function isEqualTo10(number) {
  if(number === 10) {
    return true
  }
  else return false
  
 }
 
//  8.Write a function called isGreaterOrEqualTo15 that takes a number as a
//   parameter and returns true if the given number is greater than or equal 
//   to 15 and false if it is not.

function isGreaterOrEqualTo15(number) {
  if(number >= 15) {
    return true
  }
   return false
  
 }

//  9.Write a function called isLessOrEqualTo8 that takes a number as 
//  a parameter and returns true if the given number is less 
//  than or equal to 8 and false if it is not.

function isLessOrEqualTo8(num1) { 
 
  if(num1 <= 8) {
    return true
  }
  return false
 } 