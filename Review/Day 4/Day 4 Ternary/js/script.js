/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Expressions Assignment
 */

//If GPA > 2.0 you can Graduate

var gpa = 3.5;

//Basic If Statement
if(gpa > 2.0) {
    console.log("You can graduate!");
} else {
    console.log("You can't graduate! :(");
}

//Ternary
(gpa > 2.0) ? console.log("You can graduate!") : console.log("You can't graduate!");


//If child < 10 = must read GE&H or TTM

var childAge = 9;
var book;

book = (childAge < 10) ? "Green Eggs and Ham" : "The Time Machine";

console.log("The child must read " + book);