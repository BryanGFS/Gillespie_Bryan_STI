/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Expressions Assignment
 */

// Some decisions affect others

// if warm then goto beach
// else goto movies

//Get temp
var temp = prompt("What is the temperature outside?");

//Water temp
var waterTemp = 23;
var canSwim = "yes";
var kids = "no";

if(temp >= 80) {

    console.log("Let's go to the beach!");

    if(waterTemp > 75) {
        console.log("Let's go swim");

        if(canSwim == "yes") {
            console.log("I don't even need my old swimmy floats!");
        } else {
            console.log("I'm lame and need floatys. :(");
        }

    } else {
        console.log("Let's tan!");
    }

} else {

    console.log("Let's watch a movie!")

    if(kids == "yes") {
        console.log("Let's go see the spongebob movie!");
    } else {
        console.log("Let's see 50 shades of grey!");
    }

}