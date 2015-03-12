/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Expressions Assignment
 */

// Some decisions affect others

// if warm then goto beach
// else goto movies

//Create Temp Variable
var temp = prompt("Let's figure out what we want to do today! What is the temperature outside?");

//Loop until we've got a valid input
while(true) {
    if(isNaN(temp) || temp === "") {
        temp = prompt("That's an invalid input! What is the temperature outside?");
    } else {
        break;
    }
}

if(temp >= 80) {

    //Create waterTemp Variable
    var waterTemp = prompt("What's the water temperature?");

    //Loop until we've got a valid input
    while(true) {
        if(isNaN(waterTemp) || waterTemp === "") {
            waterTemp = prompt("That's an invalid input! What is the water temperature?");
        } else {
            break;
        }
    }

    if(waterTemp > 75) {

        //Create Temp Variable
        var canSwim = prompt("Can you swim? (Y or N)");

        //Loop until we've got a valid input
        while(true) {
            if(canSwim != "N" || canSwim != "Y") {
                canSwim = prompt("Invalid input! Please only enter 'Y' or 'N'. Can you swim?");
            } else {
                break;
            }
        }

        if(canSwim) {
            console.log("I don't even need my old swimmy floats!");
        } else {
            console.log("I'm lame and need floatys. :(");
        }

    } else {
        console.log("Let's tan!");
    }

} else {

    if(confirm("Do you have kids with you?")) {
        console.log("Let's go see the spongebob movie!");
    } else {
        console.log("Let's see 50 shades of grey!");
    }

}