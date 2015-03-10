/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Expressions Assignment
 */

//Basic conditional - Do I have enough money to buy a car

var budget = 15000;
var carPrice = 23000;
var paycheck = 1600;

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