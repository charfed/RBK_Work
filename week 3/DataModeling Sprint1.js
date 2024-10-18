
// 1.Think about some different attributes of books – what do all*
//  books have? Ideas include:

// 2. In terms of the properties of books that you thought of,
//  represent the following books as data:

// 3. You may have been rewriting the same type of object over and over. We need to
//  stay DRY (Do Not Repeat). Write a function makeBook that takes as arguments 
//  different attributes of a book and returns an object representing that book 
//  that has the proper structure (we call this a factory function).

var Book5 ={
        title:"Harry Potter and the Sorcerer's Stone",
        author:"J.K. Rowling",
        msrp : 15.92,
        genre : "action",
        nbr_Pages:254,
        descrip :"harry potter learning magic"
}


function BookFactory(title ,author ,msrp ,genre ,nbr_Pages ,descrip){
    return {
        title:title,
        author:author,
        msrp : msrp,
        genre : genre,
        nbr_Pages:nbr_Pages,
        descrip :descrip
    }
}


var Book1 = BookFactory("Harry Potter and the Sorcerer's Stone","J.K. Rowling",15.92,"action",254,"harry potter learning magic")
var Book2 = BookFactory("Romeo & Juliette" ,"William Shakespeare" ,25.18 ,"romance" ,512 ,"love story between Romeo and Juliette")
var Book3 = BookFactory("Structure and Interpretation of Computer Programs","Gerald Jay Sussman , Hal Abelson",18.89,"computer Science",370,"creating new mind controling machines")

// 4. Look at one of your book objects in the console. This is the object inspector. 
// The object inspector is nice to have, but it will be easier to have a 
// function to display the more important information easily. Write a function called 
// displayBook that takes a book as an argument, and returns the important information
//  in a more readable way,

function displayBook(book) { 
    return "the book title is "+book.title+" ,the author's name is  "+book.author+" and the genre is "+book.genre
} 

// 5. Create an array called books that holds all 
// of the books that you created above.

var books = []
function Bookstore(book){
    books.push(book)
    return books
}

// 6. Your function displayBook can be used to display a single book as a string.
// Now, write a function displayBooks that, given an array of books, returns a single 
// string consisting of all of the books. Use the function displayBook to format all of
// the books. Each book should be numbered and separated with a newline (we also call 
// this a line break) character so that each book is shown on a separate line in the 
// console. The newline character is specified with a special escaped character in a
// string:

function displayBooks(books){
var display = ""
for (let i = 0; i < books.length; i++) {
    display=display+i+"."+displayBook(books[i])+"\n";
    
}
return display
}

// 7. Write a function searchBooks that, given a query and an 
// array of books, searches the array of books for 'matching'
// books. You will decide what way you want to write your search
// algorithm. Here are some things to think about: What fields 
// will be searched? Will you search multiple fields simultaneously
// (it might be best to start with one field, e.g.title)? Should 
// the search be case-sensitive? How will the search work? Will
// it only work from the beginning of a field, or from anywhere
// within? some hints:

function isMatch (querry,book){
book["title"]=book["title"].toLowerCase()
querry=querry.toLowerCase()
        if(book["title"].indexOf(querry)!==-1){
            return true
        }
        else return false
    }

function searchBooks(querry,arrBooks) {
    var NewArr= []
    for (let i = 0; i < arrBooks.length; i++) {
        if(isMatch (querry,arrBooks[i])){
            NewArr.push(arrBooks[i]) 
        }       
    }
    return NewArr
}  

// 8. Write a function removeBook that, given a book's title and an 
// array of books, returns a new array of books that does not contain
// the book with the provided title.

function removeBook(arrBooks,title){
 for (let i = 0; i < arrBooks.length; i++) {
    if(isMatch (title,arrBooks[i])){
        arrBooks.splice(i,1)
        return title+" got removed "
    }
 }
}

// 11.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌printAllProperties‌‌ ‌that‌ takes
//  ‌an‌ ‌object‌ ‌as a parameter. It then prints out to the console
// the values of all the object’s properties.

function printAllProperties(obj){
for(var key in obj){
    console.log(key)
}
}


// More Practice:

// 1. As we did before, think about what kinds of aspects of movies you 
// would like to represent. A few ideas are: Title ,Director ,Duration ,
// Release Date ,Actors/Actresses ,Studio(s) ,Synopsis ,Rating

// 2.Make five more movie objects using the same format you decided upon.

// 3. Write a factory function for movies. HINT: What is 
// a factory function? We explained it above!

function movieFactory(title,actor, role,movDur,relDate,reward,rating,critics){
    return {
        title:title,
        actor:actor,
        role:role,
        movDur:movDur,
        relDate:relDate,
        reward:0,
        rating:0,
        critics:0
    }
}

var movie1 = movieFactory("Killer Heat","Joseph Gordon-Levit","Dept",1.37,"26 septembre 2024")
var movie2 = movieFactory("Blackout","Josh Duhamel","Michael",1.56,"7 juin 2024")
var movie3 = movieFactory("I'm unstoppable","Johnny Depp","Tirus",1.35,"20 avril 2024")
var movie4 = movieFactory("Lie or Die ","Hether Michaels","Emma",1.42,"13 may 2024")
var movie5 = movieFactory("Living Ghost","Angel Swiler","Ava",1.33,"1 january 2024")
