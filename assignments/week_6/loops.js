// this is considered a while loop


if (true) {

}

var counter = 0;

while (counter <  10) {
    console.log("Running");
    counter = counter + 1;
}

// This is considered a do while loop 

while (false){

}

do {
    // This line runs at minimum one time everytime, becasue we execute the code first AND THEN we check the condition. 
} while (false);

// This is considered a for loop

for (var i = 0; i < 1000; i = i+ 1) {
    console.log("Running");
    console.log(i);
}

// These are Shortcuts
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
//This will Continue, once the continue keyword is executated,
for (var i = 0; i < 10; i = i + 1 ) {
    if (true) {
        continue;
    }

    console.log("running with continue keyword.");
}