//Datatypes
"strings";
1000;
false;

//Variables
var someVariable = -200;
var isItRaining= false;

//IF Statements
if (someVariable > 20) {
    console.log("This number is higher than 20 ");
    if (someVariable < 2000) {
        console.log("This number is lower than 2000.");
    }
} else {
    console.log("This number is lower than 20.");
}

if (isItRaining == true) {
    console.log(" Bring an umbrella!");
}

//Functions
function coolFunction() {
    console.log(200);
    console.log(20);
    console.log(2);
}

coolFunction();
coolFunction();
coolFunction();


//Arguments & Parameters
// Arguments get stored inside of parameters
// Arguments are the values given to the function, and parameters are the function variables that will hold these values.
function addExclamation(message, num) {
    console.log(message,"!!!", 200);

    var results = num * 2;
    console.log(results);

}
// Arguments are written inside parentheses of function call
addExclamation("Hello", 2);
addExclamation("It is raining", 7);
addExclamation("Goodbye", 14);

//console.log(200, 2000, "hello there");


//Returning values from functions.
// The someText variable was created when you call; the fucnction , but it also gets destroyed when the function call ends

 function getText() {
    var someText = "Nice weather.";
    return someText;
}

console.log( getText() );
//sometext does not exist as it was destroyed when the function call ended.
//console.log(sometext);



//concatentation
var completeSentence = "My name is " + "Gonzalo";
console.log(completeSentence);

//type Coercion
console.log("Hello" + 100);
console.log("100" + 100);
console.log(100 + "100");
console.log("This is false " + true); 

//Trying to multiply
