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

function calcArea(r) {
    return r * r * Math.PI;
}

function calcSqInCost(cost, area) {
    return (cost/area).toFixed(2);
}

function calcSliceCost(cost, count) {
    return (cost/count).toFixed(2);
}

alert("Welcome! Let's find out the cost of your pizza per slice!");

var pizzaRadius = getNum("What's the radius of your pizza?");
var pizzaCost = getNum("What's the total price of your pizza?");
var sliceCount = getNum("How many slices are in your pizza?");

var area = calcArea(pizzaRadius);
var sqInCost = calcSqInCost(pizzaCost, area);
var sliceCost = calcSliceCost(pizzaCost, sliceCount);

console.log("We've finished calculating the results! \nCost per Square Inch: $" + sqInCost + "\nCost per Slice: $" + sliceCost);
