// while loop


if (true) {

}

var counter = 0;

while (counter <  10) {
    console.log("Running");
    counter = counter + 1;
}

// do while loop 

while (false){

}

do {
    // This line WILL AWLWAYS run atleast 1 time, becasue we execute the code first AND THEN we check the condition. 
} while (false);

// for loop

for (var i = 0; i < 1000; i = i+ 1) {
    console.log("Running");
    console.log(i);
}

//Shortcuts
var someNumber = 10;

someNumber++; // someNumber = someNumber +1;
someNumber--; // someNumber = someNumber -1;
someNumber += 2; // someNumber = someNumber +2;
someNumber -= 2; // someNumber = someNumber -2;
someNumber /= 3;
someNumber *= 3;

//function sayRunning() {
//    console.log("Running");
// }

// sayRunning 

for (var i = 0; i < 10; i = i + 1 ) {
    console.log("running with break keyword.");

    if (i == 6) {
        break;
    }
}
//Continue, once the continue keyword is executated,
for (var i = 0; i < 10; i = i + 1 ) {
    if (true) {
        continue;
    }

    console.log("running with continue keyword.");
}