/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Expressions Assignment
 */

//Test steak temp - output the cooked level

/*
 * Extra-rare or Blue       115–120 °F
 * Rare (saignant)          125–130 °F
 * Medium rare (à point)	130–140 °F
 * Medium (demi-anglais)	140–150 °F
 * Medium well (cuit)       150–155 °F
 * Well done (bien cuit)    160 °F+
 */

//Steak Temperature
var steakTemp = prompt('What is the temperature of your steak?');

//Steak grade
var grade;

//Check where our temp is

if(steakTemp < 115) {
    grade = "Raw";
} else if(steakTemp < 125) {
    grade = "Extra Rare";
} else if(steakTemp < 130) {
    grade = "Rare";
} else if(steakTemp < 140) {
    grade = "Medium Rare";
} else if(steakTemp < 150) {
    grade = "Medium";
} else if(steakTemp < 155) {
    grade = "Medium Well";
} else if(steakTemp < 160) {
    grade = "Well Done";
} else {
    grade = "Burned";
}

console.log("Your steak is currently " + grade);