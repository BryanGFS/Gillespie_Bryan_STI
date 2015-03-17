/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Day 7 Loop Arrays
 */

var myArray = ["One","Two","Three","Four","Five"];

for(var i = 0; i < myArray.length; i++) {
    console.log("Array Value " + myArray[i]);
}

var bills = [50,10,5,20,10];
var total = 0;
var average = 0;
var count = 0;

for(var i=0; i < bills.length; i++) {

    if(bills[i] >= 15) {
        total += bills[i];
        count++;
    }

}

average = total/count;

console.log("Total is " + total + " and the average is " + average);