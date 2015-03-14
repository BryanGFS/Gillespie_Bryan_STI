/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Day 6 Math
 */


//Math.round(); - Basic Rounding

var num1 = 9.144;
console.log("Num1: " + num1);
console.log("Rounded: " + Math.round(num1));

// Math.floor(); - Rounds down

var num2 = 6.1;
console.log("Num2: " + num2);
console.log("Floor: " + Math.floor(num2));

//Math.ceil(); - Rounds up

var num3 = 3.129;
console.log("Num3: " + num3);
console.log("Ceil: " + Math.ceil(num3));

//Math.random(); - Random number 0 -> 1

var num4 = Math.random();
console.log("num4: " + num4);

//Random 0->10

var num5 = Math.random()*10;
console.log("num5: " + num5);

//random int 0-100

var num6 = Math.round(Math.random() * 100);
console.log("num6: " + num6);

//Random between 2 numbers = 50-80
//Math.random() * range + min

var min = 50;
var max = 80;
var num7 = Math.round(Math.random() * (max-min) + min);
console.log("num7: " + num7);

//PIE
console.log("PI: " + Math.PI);

var radius = 7;
var area = (radius*radius*Math.PI).toFixed(2);
console.log("Area: " + area);