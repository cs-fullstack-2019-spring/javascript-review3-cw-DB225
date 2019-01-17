//PROBLEM1
//Put the start of your program in a main function.
// Create a loop that takes user input and put it in an array.
// Once the user quits, print all items in the array.
// DO NOT print the array, print the items/elements in the array.

function main() {
    var Array = [];
    do{
        var userInput = prompt("Write something:");
    }
    while ( userInput !== "q");
    console.log(Array.push(userInput));
}
main();

//PROBLEM2
// Put the start of your program in a main function.
// Create a function that can translate five English words into Spanish words.
// You should be able to call your function from your main function.

function main1() {
    var words = ["Monday","Tuesday","Wenesday","thursday","Friday"];
    words.forEach(
    function day(eachElement) {
        console.log(eachElement)
    });
}
main1();


// PROBLEM3
// Put the start of your program in a main function.
// Create a program that takes number inputs into an array until a quit word.
// Afterwards, display all numbers (not the array) and the sum.

function main2() {
    let nums = [];
    userInput = "";
    while (userInput !== "q") {
        nums.push(parseInt(userInput));
        userInput = parseInt(prompt("Put a number:"));
        console.log(userInput);
    }

    function callback(total,num){
        return(total+num);
    }
    console.log(nums.reduce(callback));
}

main2();


//PROBLEM4
//Put the start of your program in a main function.
// Create a class for Books with name, rating, genre, and author.
// Create a class method that will function that will change the rating of the book.
// Create three objects of the class Book and put them in an array.
// Lastly, use the array to display only the names of the books.






