/*
 * Bryan Gillespie
 * 3-5-2015
 * Section 00
 * Day 2 Intro
 */

//alert("Hello World");

/*
 * Example of a multi lined comment
 * Anything inside here will not be
 * processed by the computer.
 */

//Single line comment - Only this line will be ignored

//Alert Boxes - Popup box that alerts the user with information
//alert("Text to display");

//Print to console.log - Shows information to the programmer.
//Great for checking values and debug
//Also shows all errors

console.log("This is the console");

//Declare a variable
//Use the keyword 'var'

var myVariable;

//Define the variable

myVariable = 42;

//Console.log the variable

console.log("myVariable: " + myVariable);

//Declare and define a variable at the same time

var a = 2;

//Console.log the variable

console.log("a: " + a);

//Add to my variable

a = a + 3;

//Print it
console.log("a: " + a);

//Declare another var

var b;

//Define a variable w/ a var

b = a + 3;

//Log it
console.log("b: " + b);

//Simple Math
//Find our ages

//Declare and define year born
var year = 1996;
var month = 6;
var day = 22;

//Current Year Variables
var currentTime = new Date();
var curMonth = currentTime.getMonth() + 1;
var curDay = currentTime.getDate();
var curYear = currentTime.getFullYear();

//Our final age variable
var age;

//Find our age
if(curMonth >= month && curDay >= day) {
    age = curYear - year;
} else {
    age = curYear - year - 1;
}

//Print it
console.log("Age: " + age);


//Find the area of a triangle

var base = 4;
var height = 5;

var areaTriangle = base * height / 2;

//Print it
console.log("Area of Triangle: " + areaTriangle);

//Modulo - %
//Gives the remainder

var decimal = 32/10;
console.log("Traditional Div: " + decimal);

var remainder = 32%10;
console.log("Modulo: " + remainder);

//Find if even or odd
//Modulo by 2
// 0 = even, 1 = odd

var evenOrOdd = 67%2;
console.log("Even Or Odd: " + evenOrOdd);

//Assignment Operators
/*
 * Equals - Assigns the value to the variable
 * PlusPlus - Adds 1 to the current value;
 * MinusMinus - Subtracts 1 from the current value;
 * PlusEquals - Adds value to variable;
 * MinusEquals - Subtracts value from variable;
 * DivideEquals - Divide the current value by the number
 * MultiplyEquals - Multiple the current value by the number
 */

var assign = 0;

//Add 1 to the value
assign++;

console.log("Assign: " + assign);

//Minus 1 to the value
assign--;

console.log("Assign: " + assign);

//Add 5 to the value
assign += 5;

console.log("Assign: " + assign);

//Subtract 2 from the value
assign -= 2;

console.log("Assign: " + assign);

//Divide value by 3
assign /= 3;

console.log("Assign: " + assign);

//Multiply value by 7
assign *= 7;

console.log("Assign: " + assign);

// Strings - Any text that we use

var kermit = "Light Green";
var frogName = "Kermit";

console.log(frogName + " is the color " + kermit);


//To double quote or not to
// use \ to escape something
var phrase = "I don't know";

phrase = 'I don\'t know';

console.log("Phrase: " + phrase);

//Escape Char can also do multiple lines...

console.log("test \n this \n new \n line");


//Boolean
var yes = true;
var nope = false;


//Order of Operations
//PEMDAS - Please Excuse My Dear Aunt Sally
//Parenthesis - Exponents - Multiplication - Division - Addition - Subtraction

//Average Quiz Grades
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 90;

var average = (quiz1 + quiz2 + quiz3)/3;

console.log("Average: " + average);

//Concatenation - Combining Text Strings
//Use the Plus sign

var firstName = "Kermit";
var lastName = "The Frog";

var fullName = firstName + " " + lastName;
console.log("Name: " + fullName);

var d = "6";
var e = 7;

//If you want the test string to be a number you to cast it.

var combined = Number(d) + e;
console.log("Combined: " + combined);

var pi = Math.PI;

//Round with .toFixed();
var num = 5.582371923;
var n = num.toFixed(2);

console.log("Rounded: " + n);