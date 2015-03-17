/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Day 7 Functions
 */

//circ function
function circumference(r) {
    //Return circ
    return 2 * Math.PI * r;
}

//bee stings function
function beeStings(w) {
    //Return it
    return w / 8.666666667;
}

//Log it
console.log("The circumference of the circle is " + circumference(5));

//Log it
console.log("It takes " + beeStings(120) + " to kill this animal!");