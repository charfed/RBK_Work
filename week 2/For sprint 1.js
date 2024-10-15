// 1.Write a function called sumOfN that takes a number as a 
// parameter and returns the sum of that number and all the 
// numbers before it.

function sumOfN(n) {
    var sum = 0
    for (var i = 0; i <= n; i++) {
        console.log(sum)
        sum+=i
        
    }
    return sum
 }  


// 2.Write a function called factorialOfN that takes a whole 
// number as a parameter and returns the factorial of that number.

function factorialOfN(n) {
    var fact = 1
    for (var i = 1; i <= n; i++) {
        console.log(fact)
        fact*=i
        
    }
    return fact
}

// 3.Write a function called repeatString that takes two parameters, 
// as string and a number, and returns that string the number of times 
// specified in the second parameter.

function repeatString(str , n) {
    var newStr = ''
    for (var i=0 ; i < n ; i++) {
        console.log(newStr)
        newStr +=str 
    }
    return newStr
}

// 4.Write a function called countMinMax that 
// takes two numbers as parameters and returns 
// the range.

function countMinMax(min,max) {
    var count = 0
    for (let i = min; i < max ; i++) {
        count++
        console.log("i :", i , " count : ",count)

    }
    return count
}

// 5.Write a function called sumMinToMax that takes 
// two numbers as parameters and returns the 
// sum between the two integers beginning at 
// the num1 and excluding num2.

function sumMinToMax(min, max) {
    var sum = 0
    for (var i = min; i < max; i++) {
        sum+= i  
        console.log("i:" ,i, " sum : ",sum)  
    }
    return sum
 } 

//  6.Write a function called productMinToMax 
//  that takes two numbers as parameters and 
//  returns the product between the two 
//  integers beginning at the num1 and 
//  excluding num2.

function productMinToMax(min, max) {
    var prod = 1
    for (var i = min; i < max; i++) {
        prod*=i
        console.log("i:" ,i, " prod : ",prod)
    }
    return prod
 }  

//  7.Write a function called multiplyBy10NTimes
//   that takes two numbers as parameters and 
//   returns the first number multiplied by 10
//    the amount of times indicated by the 
//    second number.

function multiplyBy10NTimes(num, n) {
    
    for(var i=0; i<n; i=i+1){
        num=num*10  
    }
      return num   
 } 

//  8.Write a function called countCharAtIndex 
//  that takes three parameters, a string, an index, 
//  and another string. This function should 
//  use the index to find the corresponding character 
//  in the first string and loop through the second string and
//   count how many times that character occurs.

function countCharAtIndex(string1, index, string2) {
   var char  = string1.charAt(index)
   var counter = 0
   for (var i = 0; i < string2.length; i++) {
        if(char === string2[i]){
            counter++
        }
    
   }
   return counter
 }  
 
//  9.Write a function called reverseString
//   that takes a string as an input 
//   and returns that string in reverse.

function reverseStringFor(string) {
    var revStr = ''
    for (var i = string.length-1; i >= 0 ; i--) {  
        revStr = revStr + string[i]   
        
    }
    return  revStr
 }  

//  10-.Write a function called getIndexOf 
//  that takes two parameters, a string, and a 
//  character, and returns the first position of the
//  character in that string.

function getIndexOf(string, char) {
    var res = -1
    for (var i = 0; i < string.length; i++) {
        if(char  === string[i]) {
            res = i
        }   
    }
    return res
 }  

 function getIndexOf2(string, char){
    return string.indexOf(char)
 }


//  11- Using a for loop THEN a while loop
//  Write a JavaScript function 
//  that will iterate from 0 to 
//  n. For each iteration,
//  it will check if the current 
//  number is odd or even, and display
//   a message on the screen

function iterateAndLogWithFor(n) {
    for (var i = 0; i < n; i++) {
        if(i% 2 === 0) {
            console.log("the number ",i," is even")
        }
        else  console.log("the number ",i," is odd")
    } 
 }  

 function iterateAndLogWithWhile(n) {
    var i = 0
    while(i < n) {
         if( i % 2 === 0){
            console.log("the number ",i," is even")
    
         }
         else {console.log("the number ",i," is odd")}
         i++  
    } 
    }

    // 12-  Using a for loop THEN a while loop
    // Write a JavaScript function that will 
    // iterate from n to 0. For each iteration,
    // it will check if the current number is odd 
    // or even, and display a message to the screen.

    function reverseIterateAndLogWithFor(n) {
        for(var i = n ; i >= 0 ; i --) {
            if(i% 2 === 0) {
                console.log("the number is ",i," even")
            }
            else console.log("the number is ",i," odd") 
        }
     } 
     
     function reverseIterateAndLogWithWhile(n) {
        var i = n
        while(i >= 0){
            if(i% 2 === 0) {
                console.log("the number is ",i," even")
            }
            else console.log("the number is ",i," odd") 
            i--
        }   
        }
        // 13-  Using a for loop THEN a
        //  while loop
        // Write a function that:
        // Loop through the numbers 1 to n
        // If the number is divisible by 3,
        //  print "Julia"
        // If the number is divisible by 5,
        //  print "James"
        // If the number is divisible by 3 
        // and 5, print "JuliaJames"
        // If the number is not divisible 
        // by 3 or 5, print the number
        
        function weirdDivisionWithFor(n) {
            for (var i = 1; i <= n; i++) {
                if(i % 3 === 0 && i % 5 === 0){
                    console.log("juliajames") 
                }
                else if(i % 3 === 0){
                    console.log("julia") 
                }
                else if(i % 5 === 0) {
                    console.log("james")
                }
                else  console.log(i)  
            }
         } 

        function weirdDivisionWithWhile(n){
            var i = 1
            while(i <=n){
                if(i % 3 === 0 && i % 5 === 0){
                    console.log("juliajames") 
                }
                else if(i % 3 === 0){
                    console.log("julia") 
                }
                else if(i % 5 === 0) {
                    console.log("james")
                }
                else  console.log(i)  

                i++
            }
        }

        // 14-  Write a function called laugh()
        //  that takes one parameter,
        // num that represents the number of "ha"s to return.

        function laughFor(num){
            var str =''
            for (let i = 0; i < num; i++) {
                str+='ha'
                console.log(str)
            }
            return str
        }

        function laughWhile(num){
            var str = ''
            var i = 0
            while(i < num){
                str+='ha'
                console.log(str)
                i++
            }
            return str
        }

        // 15-  You are given an integer. Return the sum
        //  of its digits.

        function addDigits(num) {
        var str = num.toString()
        var sum = 0
        for(var i = 0 ; i < str.length ; i ++){
            sum += parseInt(str[i])
            
        }
        return sum
            
          }
        
        //  16-  Write a function that returns 
        //  the first digit in a string
        //  using a for/while loop
        //  (digits may be anywhere 
        //  in the string)
        
        function FirstDigit(str) {
            var i = 0
            while(i < str.length){
                if(!isNaN(str[i])) {
                    return parseInt(str[i])
                    
                }
                i++
            }
            return "no digits in the string"
        }
        

        //   17-  Create a function that checks if a string is 
        //   a palindrome (google it)
            function Checkpalindrome(string){
                var revString = reverseStringFor(string)
                for (var i = 0; i < string.length; i++) {
                        if(revString[i]!==string[i]){
                            return "the string "+string+" is not a palindrome"
                        }
                    
                }
                return "the string "+string+" is a palindrome"
            }


            // 18- Write a function called sumOfFirstAndLast that takes a number
            // as a parameter and returns the sum of the first and last digits. 
            // Please do this without turning the number into a string.

            // function sumOfFirstAndLast(number) {
            // var str = number.toString()
            // return parseInt(str[0])+parseInt(str[str.length-1])
            // }  
            
            // better solution ...

            function sumOfFirstAndLastFor(number){
            var last = number%10
            var first = 0
            if(number < 10 ) {
                return number
            }
                for(;number >=10;number = Math.floor(number/10)){ 
                }
                first = number
                return first + last
            }
            


         