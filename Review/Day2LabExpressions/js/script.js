/*
 * Bryan Gillespie
 * 3-5-2015
 * Section 00
 * Day 2 Lab Expressions
 */

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

//Slice of Pie part 1

//People
var peopleCount = getNum("How many people?");
//Pizza count
var pizzaCount = getNum("How many pizzas?");
//Slices
var sliceCount = getNum("How many slices per pizza?");

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
var bills = [
    getNum("First bill total"),
    getNum("Second bill total"),
    getNum("Third bill total"),
    getNum("Fourth bill total"),
    getNum("Fifth bill total")];
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
var original = getNum("Original price of T-Shirt");
//Discount
var discount = getNum("Discount Percentage");
//Tax
var tax = getNum("Tax percentage");

//Discounted
var discounted = (1-(discount/100)) * original;
//Discounted w/ tax
var discountedTaxed = discounted * (1+(tax/100));

//Log it
console.log("Your " + desc + " was originall $" + original + ".00, but after a " + discount + "% discount, it is now $" + discounted + " without tax, and $" + discountedTaxed + " with tax");











