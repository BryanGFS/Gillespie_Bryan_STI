/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Day 7 Beer
 */

//99 bottles of beer on the wall

for(var i = 99; i > 0; i--) {
    console.log(
        i + " bottles of beer on the wall, " +
        i + " bottles of beer, Take Pizza down, pass it around, " +
        (i-1) + " bottles of beer on the wall!"
    );
}