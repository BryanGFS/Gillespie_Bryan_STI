/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Day 7 Zombies
 */

//Zombie Attack
//Accidental Zombie @ FS

var zombies = 1;    //Our Zombie Count
var biteLimit = 4;  //Amount of people zombie can bite a day
var days = 8;       //Days CDC wants to Calc For

for(var i = 1; i <= days; i++) {

    zombies = zombies + (zombies * biteLimit);
    console.log("It's day " + i + " and there are now " + zombies + " zombies ");

}

//How long will it take to get a million zombies?
while(zombies < 1000000) {

    zombies = zombies + (zombies * biteLimit);
    days++;
}

console.log("It will take " + days + " days to reach " + zombies + " zombies.");
