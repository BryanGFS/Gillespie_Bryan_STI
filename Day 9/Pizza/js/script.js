/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Day 9 Pizza
 */

//Function for getting a number prompt w/ validation
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

alert("Welcome! Let's find out the cost of your pizza");

var pizzaRadius = getNum("What's the radius of your pizza?");