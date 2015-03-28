/*
 * Bryan Gillespie
 * 3-5-2015
 * Section 00
 * Final Exam SDI
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

function getPercent(question) {

    //Ask out question for our percent
    var num = prompt(question);

    //Validate it!
    while(true) {
        if(isNaN(num) || num === "" || num > 100 || num < 0) {
            num = prompt("Invalid Input! " + question);
        } else {
            break;
        }
    }

    //return our number
    return parseInt(num);
}

function discountedCost(cost, discount) {
    return cost * (1-(discount/100));
}

//Alright - get our stuff
//Ask for our cost
var cost = getNum("Enter the cost of the item.");

//Get out Percentage of Discount
var percent = getPercent("Enter the discount amount");

//Get our discounted cost
var discounted = discountedCost(cost, percent);

console.log("The final cost of an item that costs $" + cost + " with a discount of " + percent + "% is $" + discounted);


/*
 * TEST VALUES
 * $20 cost
 * 25% discount
 * result = $15
 *
 * $50 cost
 * 50% discount
 * result = $25
 */