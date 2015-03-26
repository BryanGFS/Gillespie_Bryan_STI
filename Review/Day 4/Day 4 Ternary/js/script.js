/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Expressions Assignment
 */

function getNum(question) {

    //Ask out question for our number
    var num = prompt(question);

    //Validate it!
    while(true) {
        if(isNaN(num) || num === "") {
            num = prompt("Invalid Input! " + question);
        } else {
            break;
        }
    }

    //return our number
    return parseInt(num);
}

//If GPA > 2.0 you can Graduate

var gpa = getNum("Whats your GPA?");

//Basic If Statement
if(gpa > 2.0) {
    console.log("You can graduate!");
} else {
    console.log("You can't graduate! :(");
}

//Ternary
(gpa > 2.0) ? console.log("You can graduate!") : console.log("You can't graduate!");


//If child < 10 = must read GE&H or TTM

var childAge = getNum("How old is the child?");
var book;

book = (childAge < 10) ? "Green Eggs and Ham" : "The Time Machine";

console.log("The child must read " + book);