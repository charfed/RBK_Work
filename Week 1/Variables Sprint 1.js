
// ex 5-6-7-8-9-10-11-12

var numb = 0
var upperbound = 10
var guess = randInt(upperbound)
var tries = 5
var score = 100



function GuessNumb() {
    numb = numb + 1
    return numb
}

function randInt(n) {
    return Math.floor(Math.random() * (n + 1))
}


function resetGame() {
    numb = 0
    upperbound = 10
    tries = 5
    score = 100   
}


function guessMyNumber(n) {
var Guesscounter = GuessNumb()

    //condition missing a fixing part ... it stops at 2 tries
    // still missing the score record but the score system 
    // works just fine 👌 
    // when it should stop at the last try
    // WIP (Work in progress)
    
    if(Guesscounter > tries) {
        upperBound = upperbound -1
        guess = randInt(upperbound)
        return 'sorry but you have used all of your tries ! , the correct number is '+guess +' and your score is a '+score+' /// this is disappointing my friend !😒 ///';
    }
    if (n > upperbound) {
        return 'Out of bounds! Please try a number between 0 and ' + upperbound;
    }
    else if (n === undefined || n === null) {
        return "please enter a guess ... ! 😡"
    }
    else if (n === guess && Guesscounter === 1) {
        guess = randInt(upperbound)
        resetGame()
        return 'Congratulations! You guessed my number on the first try! and your score is a '+score +' /// great job !😁 ///' ;
    }    
    else if (n === guess && score > 60) {
        upperbound = upperbound + 1
        guess = randInt(upperbound)
        resetGame()
        return 'You guessed my number in '+Guesscounter+' guesses , and your score is a '+score +' /// not bad !😊 ///';

     }
     else if (n === guess && score < 60) {
        upperbound = upperbound + 1
        guess = randInt(upperbound)
        resetGame()
        return 'You guessed my number in '+Guesscounter+' guesses , and your score is a '+score+' /// better luck next time ! 😣 ///' ;    
     }
           
    else if(n < guess) {
        Guesscounter;
        tries = tries - 1
        score = score - 20
        console.log(" hint : your guess is too low 😉 !")
        return " Nope! That wasnt it ! ---> number of tries left " + tries;
    }  
    else if(n > guess) {
        Guesscounter;
        tries = tries - 1
        score = score - 20
        console.log(" hint : your guess is too high 😉 !") 
        return " Nope! That wasnt it ! ---> number of tries left " + tries;
    }  
      
}
