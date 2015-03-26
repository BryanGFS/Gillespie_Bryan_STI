/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Expressions Assignment
 */

//Run this when the window is done loading
window.onload = init;

//Store our code in init function
function init() {

    //Prices of our shopping bills
    var shoppingPrices = [];
    //Collect first number
    shoppingPrices[0] = parseInt(prompt('Shopping Cart Price',''));
    //Collect second number
    shoppingPrices[1] = parseInt(prompt('Shopping Cart Price',''));
    //Collect third number
    shoppingPrices[2] = parseInt(prompt('Shopping Cart Price',''));
    //Collect forth number
    shoppingPrices[3] = parseInt(prompt('Shopping Cart Price',''));
    //Collect fifth number
    shoppingPrices[4] = parseInt(prompt('Shopping Cart Price',''));

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
    var results = "Your average shopping bill is $" + average.toFixed(2) + " per trip!";

    //Log our results
    console.log(results);

    //Set the div contents
    document.getElementById("result").innerText = results;

}