/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Day 9 Functions Assignment
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

//Print our results
function printResults(min, max, med, a) {

    //Print
    console.log("Hooray! We've done some calculations! Here are the results!");
    console.log("Minimum Bill: " + min); //Minimum
    console.log("Maximum Bill: " + max); //Maximum
    console.log("Median Bill: " + med);  //Median
    console.log("Average Bill: " + a);   //Average

}

//Get average
var getAverage = function(list) {

    //Init our total
    var total = 0;

    //Loop through the array
    for(var i = 0; i < list.length; i++) {

        //add value from array to total
        total += list[i];
    }

    //divide by length for average
    var ret = total / list.length;

    //return
    return ret;

}

//Get median number of array
function getMedian(values) {

    //sort our values low->high
    values.sort( function(a,b) {return a - b;} );

    //Find half
    var half = Math.floor(values.length/2);

    //find our median
    if(values.length % 2) {

        //return
        return values[half];

    } else {

        //return
        return (values[half - 1] + values[half]) / 2.0;

    }

}

//Setup our variables
var bills = []; //List of numbers (bills)
var min, max, med, average; //Create out data values

//Start our program
alert("Let's find some information about our shopping bills!");

//Get amount of bills
var count = getNum("How many bills do you have?");

// Get all our bill prices...
for(var i = 0; i < count; i++) {

    //Get the number and add it to the array.
    bills.push(getNum("Enter the total cost of the bill"));
}

average = getAverage(bills); //Get average value
med = getMedian(bills); //Get Median Value
max = Math.max.apply(Math,bills); //Get maximum values
min = Math.min.apply(Math,bills); //Get minimum values

printResults(min, max, med, average); //Print our results

/**
 *
 * Test Values
 *
 * 5 bill count
 * 5, 10, 15, 20, 25 (bills)
 *
 * ~~ Results ~~
 * Minimum Bill: 10
 * Maximum Bill: 30
 * Median Bill: 20
 * Average Bill: 20
 *
**/