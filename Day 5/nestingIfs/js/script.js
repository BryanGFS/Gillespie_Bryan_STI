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
        var canSwim = prompt("Can you swim? (Y or N)").toLowerCase();

        //Loop until we've got a valid input
        while(true) {

            if(canSwim != "n" || canSwim != "y") {
                break;
            } else {
                canSwim = prompt("Invalid input! Please only enter 'Y' or 'N'. Can you swim?");
            }

        }

        if(canSwim == "y") {
            console.log("I don't even need my old swimmy floats!");
        } else {
            console.log("I'm lame and need floatys. :(");
        }

    } else {

        console.log("Let's tan!");

    }

} else {

    //Create Temp Variable
    var kids = prompt("Do you have kids with you? (Y or N)").toLowerCase();

    //Loop until we've got a valid input
    while(true) {

        if(kids == "n" || kids == "y") {
            break;
        } else {
            console.log(kids);
            kids = prompt("Invalid input! Please only enter 'Y' or 'N'. Do you have kids with you?");
        }

    }

    if(kids == "y") {
        console.log("Let's go see the spongebob movie!");
    } else {
        console.log("Let's see 50 shades of grey!");
    }

}