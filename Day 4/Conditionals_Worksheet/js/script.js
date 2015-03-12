/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Expressions Assignment
 */

/////////////////////////////////////
// Celsius to Fahrenheit converter //
/////////////////////////////////////

//Get our unit
var unit = prompt('Enter C for Celsius or F for Fahrenheit.','');

//Get out temp
var degrees = parseInt(prompt('Enter the temperature.',''));

//Define result var
var result;

//Check if F
if(unit == "f" || unit == "F") { // Fahrenheit

    //Create and set our result variable
    result = (degrees - 32) * (5/9);

    //Log it
    console.log("The temperature is " + result + " degrees Celsius");

//Check if C
} else if(unit == "c" || unit == "C") { // Celsius

    //Create and set our result variable
    result = degrees * (9/5) + 32;

    //Log it
    console.log("The temperature is " + result + " degrees Fahrenheit");

//Unknown Unit
} else { // Unknown unit

    //Log the error
    console.log("Error! Unknown Unit!");

}


//////////////////////////
// Full Sail Grade Calc //
//////////////////////////

//Get our percentage
var grade = parseInt(prompt('What % did you recieve?',''));
var letter = "";

//check if grade % input is less than or equal to the lowest value possible for that letter, if true, set the letter variable;
if(grade >= 95) {
    letter = "A+";
} else if(grade >= 90) {
    letter = "A";
} else if(grade >= 85) {
    letter = "B+";
} else if(grade >= 80) {
    letter = "B";
} else if(grade >= 76) {
    letter = "C+";
} else if(grade >= 73) {
    letter = "C";
} else if(grade >= 70) {
    letter = "D";
} else {
    letter = "F";
}

//Log it
console.log("You have a " + grade + "%, which means you have earned a(n) " + letter + " in the class!");




/////////////////////
// Tire Pressure I //
/////////////////////

//Create Tires Array
var tires = [
        prompt('Front Left Tire Pressure'), //Get FL
        prompt('Front Right Tire Pressure'),//Get FR
        prompt('Back Left Tire Pressure'),  //Get BL
        prompt('Back Right Tire Pressure')  //Get BR
    ];

//FL != FR and BL != BR
if(tires[0] != tires[1] || tires[2] != tires[3]) {

    //Log it
    console.log("Get your tires checked out!");

//FL = FR and BL = BR
} else {

    //Log it
    console.log("The tires pass spec!");

}