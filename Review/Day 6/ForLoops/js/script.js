/*
 * Bryan Gillespie
 * 3-9-2015
 * Section 00
 * Day 6 For Loops
 */

//For loops

for(var i = 0;i < 20;i++) {
    console.log("i: " + i);
}

//break that loop dawg
for(var j = 0;j < 5;j++) {

    //Break it?
    if(j === 3) {
        console.log("Breaking that loop dawgy dawg");
        break;
    }

    console.log("J: " + j);
}

for(var k = 0; k < 3; k++){

    switch(k) {
        case 0:
            console.log("The value is Zero");
            break;
        case 1:
            console.log("The value is One");
            break;
        case 2:
            console.log("The value is Two");
            break;
    }

}