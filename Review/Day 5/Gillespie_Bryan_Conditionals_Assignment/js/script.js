/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Conditionals Assignment
 */

//How much surface area should we paint?

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

//Function for asking a yes or no (returns boolean)
function yesOrNo(question) {

    var bool = prompt(question + " (Y or N)").toLowerCase();

    //Loop until we've got a valid input
    while(true) {

        if(bool === "n" || bool === "y") {
            break;
        } else {
            bool = prompt("Invalid input! Please only enter 'Y' or 'N'. " + question);
        }

    }

    //init return variable
    var ret;

    //Should we return true or false?
    (bool == "y") ? ret = true : ret = false;

    //return our bool
    return ret;
}

//calculate total area of array
function totalAreaOfArray(myArray) {

    var total = 0;

    //Loop through each entry
    myArray.forEach(
        function (entry) {
            total = total + entry[0] * entry[1];
        }
    );

    return total;
}


//Init our variables
var wallOneX, wallOneY, wallTwoX, wallTwoY, wallThreeX, wallThreeY, wallFourX, wallFourY;

var wallOneItems = []; //Any doors + windows
var wallTwoItems = []; //Any doors + windows
var wallThreeItems = []; //Any doors + windows
var wallFourItems = []; //Any doors + windows

// Width of Wall 1
wallOneX = getNum("What's the Width of Wall One?");

// Height of wall 1
wallOneY = getNum("What's the Height of Wall One?");

//Are there any windows or doors?
if(yesOrNo("Does this wall have any windows or doors?")) {

    //Loop and find out if there are more doors/windows
    while(true) {

        //Add Items
        wallOneItems.push([getNum("Width of the Window or Door"),getNum("Height of the Window or Door")]);

        //Check if we have another window or door
        if(!yesOrNo("Does this wall have more windows or doors?")) {
            break;
        }

    }

}

// Width of Wall 2
wallTwoX = getNum("Whats the Width of Wall Two?");

// Height of wall 2
wallTwoY = getNum("What's the Height of Wall Two?");

//Are there any windows or doors?
if(yesOrNo("Does this wall have any windows or doors?")) {

    //Loop and find out if there are more doors/windows
    while(true) {

        //Add Items
        wallTwoItems.push([getNum("Width of the Window or Door"),getNum("Height of the Window or Door")]);

        //Check if we have another window or door
        if(!yesOrNo("Does this wall have more windows or doors?")) {
            break;
        }

    }

}

// Width of Wall 3
wallThreeX = getNum("Whats the Width of Wall Three?");

// Height of wall 3
wallThreeY = getNum("What's the Height of Wall Three?");

//Are there any windows or doors?
if(yesOrNo("Does this wall have any windows or doors?")) {

    //Loop and find out if there are more doors/windows
    while(true) {

        //Add items
        wallThreeItems.push([getNum("Width of the Window or Door"),getNum("Height of the Window or Door")]);

        //Check if we have another window or door
        if(!yesOrNo("Does this wall have more windows or doors?")) {
            break;
        }

    }

}

// Width of Wall 4
wallFourX = getNum("Whats the Width of Wall Four?");

// Height of wall 4
wallFourY = getNum("What's the Height of Wall Four?");

//Are there any windows or doors?
if(yesOrNo("Does this wall have any windows or doors?")) {

    //Loop and find out if there are more doors/windows
    while(true) {

        //Add items to array
        wallFourItems.push([getNum("Width of the Window or Door"),getNum("Height of the Window or Door")]);

        //Check if we have another window or door
        if(!yesOrNo("Does this wall have more windows or doors?")) {
            break;
        }

    }

}

//Get our Area's minus window/door areas
var wallOneArea, wallTwoArea, wallThreeArea, wallFourArea;

//Do we have windows or doors?
if(wallOneItems.length > 0) {

    //Subtract window & door area from wall area
    wallOneArea = (wallOneX * wallOneY) - totalAreaOfArray(wallOneItems);

} else {

    //Calc wall area
    wallOneArea = wallOneX * wallOneY;
}

//Repeat for other 3 walls
if(wallTwoItems.length > 0) {
    wallTwoArea = (wallTwoX * wallTwoY) - totalAreaOfArray(wallTwoItems);
} else {
    wallTwoArea = wallTwoX * wallTwoY;
}

if(wallThreeItems.length > 0) {
    wallThreeArea = (wallThreeX * wallThreeY) - totalAreaOfArray(wallThreeItems);
} else {
    wallThreeArea = wallThreeX * wallThreeY;
}

if(wallFourItems.length > 0) {
    wallFourArea = (wallFourX * wallFourY) - totalAreaOfArray(wallFourItems);
} else {
    wallFourArea = wallFourX * wallFourY;
}

//Our total surface area we need to paint!
var totalArea = wallOneArea + wallTwoArea + wallThreeArea + wallFourArea;

//Log it
console.log("You must paint a total surface area of " + totalArea + "ft");