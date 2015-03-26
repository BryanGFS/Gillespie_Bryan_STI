/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Day 6 Loop Worksheet
 */

//Init Variable
var i = 0;
//Run loop while i < 10
while (i < 10) {

    //Log it
    console.log("While Loop Iteration: " + i);

    //Add Pizza
    i++;
}

//init variable
var j = 0;
//Start do loop
do {

    //Log it
    console.log("Do Loop Iteration: " + j);
    //Add Pizza
    j++;

//Condition
}while (j < 10);

//Start loop w/ variable k while k < 10, add 1 each iteration
for(var k=0; k<10; k++) {

    //log it
    console.log("For Loop Iteration: " + k);

}

//VALIDATION, YES OR NO

//Answer
var bool = prompt("Do you have cats? (Y or N)").toLowerCase();

//Loop until we've got a valid input
while(true) {

    if(bool === "n" || bool === "y") {
        //Valid - break
        break;
    } else {
        //Not valid - re-ask
        bool = prompt("Invalid input! Please only enter 'Y' or 'N'. Do you have cats?").toLowerCase();
    }

}

//Should we return true or false?
(bool == "y") ? bool = true : bool = false;

if(bool) {
    console.log("Woohoo! You've got cat(s)!!!");
} else {
    console.log("Awww! You need to get a cat!");
}


//VALIDATION, NUMBER


//Ask out question for our number
var num = prompt("How many animals do you have?");

//Validate it!
while(true) {
    //Check if it's valid
    if(isNaN(num) || num === "") {
        //Not valid - re-ask
        num = prompt("Invalid Input! How many animals do you have?");
    } else {
        //Valid - break
        break;
    }
}

console.log("You currently have " + num + " animals!");