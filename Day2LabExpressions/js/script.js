/*
 * Bryan Gillespie
 * 3-5-2015
 * Section 00
 * Day 2 Lab Expressions
 */

//Slice of Pie part 1

//People
var peopleCount = 10;
//Pizza count
var pizzaCount = 4;
//Slices
var sliceCount = 8;

//Total Slices
var totalSlices = pizzaCount * sliceCount / peopleCount;

//Log it
console.log("Each person at " + totalSlices + " slices of pizza at the party.");


//Slice of Pie part 2

//Slices for sparky
var sparkySlices =  pizzaCount * sliceCount % peopleCount;

//Log it
console.log("Sparky gets " + sparkySlices + " slices of pizza.");


//Average Shopping Bill

//Array of bills
var bills = [200, 300, 230, 240, 310];
//Sum
var sum = 0;

//Loop the array
for(var i=0; i < bills.length; i++){
    //Foreach - Add it
    sum += bills[i];
}

//Average the results
var average = sum / bills.length;

//Log it
console.log("Average amount spent per trip: $" + average);


//Discounts

//Description
var desc = "T-Shirt";
//Original
var original = 20;
//Discount
var discount = 25;
//Tax
var tax = 6;

//Discounted
var discounted = (1-(discount/100)) * original;
//Discounted w/ tax
var discountedTaxed = discounted * (1+(tax/100));

//Log it
console.log("Your " + desc + " was originall $" + original + ".00, but after a " + discount + "% discount, it is now $" + discounted + " without tax, and $" + discountedTaxed + " with tax");











