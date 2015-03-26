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

//Basic conditional - Do I have enough money to buy a car

var budget = getNum("Total Budget");
var carPrice = getNum("Car Price");
var paycheck = getNum("Paycheck Amount");

if(budget < carPrice) {

    console.log("Awww... You can't afford this car!");

} else {

    console.log("Woohoo! You can afford this car!");

}

//We can buy the car if our budget >= carPrice or paycheck > 1500

if(budget < carPrice || paycheck <= 1500) {

    console.log("Awww... You can't afford this car!");

} else {

    console.log("Woohoo! You can afford this car!");

}

//We can buy the car if our budget >= carPrice and paycheck > 1500


if(budget < carPrice && paycheck <= 1500) {

    console.log("Awww... You can't afford this car!");

} else {

    console.log("Woohoo! You can afford this car!");

}