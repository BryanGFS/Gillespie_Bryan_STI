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
