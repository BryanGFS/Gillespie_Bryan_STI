/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Expressions Assignment
 */

//Prices of our shopping bills
var shoppingPrices = [210,320,120,196,402,123,592,130,162,238];

//The sum before we divide to average
var sum = 0;

//Loop through our array
for(var i=0; i < shoppingPrices.length; i++){
    //Foreach - Add it
    sum += shoppingPrices[i];
}

//Average shopping cart price...
var average = sum / shoppingPrices.length;

//Build our results string - .toFixed(2) to make it have 2 decimal places (cents)
var results = "Our average shopping bill is $" + average.toFixed(2) + " per trip";

//Log our results
console.log(results);