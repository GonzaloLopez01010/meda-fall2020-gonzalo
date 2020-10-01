//Console.log Takes the text within the quotes and sends it to the Javascript console.
console.log("Hello World");

console.log("What a lovely day!");

console.log("I will be going on a walk after class.");

// This is a single line comment.

/*

multi-line
comment

*/

// DATATYPES
// String
// Strings can start with double quotes or single quotes
"This line is a string, since its inside the double quotes";
"To use single quotes 'and ' in the string, use double quotes at the end "

//Number (Dont use quotes)
200;
20.0;
.20000;
console.log(200);
console.log(20.0);
console.log(.20000);

//Boolean
true;
false;

//VARIABLE
var myBox;

//Naming Schemes 
// Camel Case: capitalize every word after first word
// Example: originalLocation
//Snake Case: every space is replace by and underscore, no capital letters 
// Example: original_location

myBox = "kitchen utensils";

var secondVariable = "Kitchen utensils"

console.log(myBox)

// Mathematical Operateros
// +,-, /, *, %

var sum = 3 + 6
var difference = 3 - 6
var quotient = 3 / 6
var product = 3 * 6
var remainder = 3 % 6

console.log("The Quotient of 3 and 6 is", quotient);
console.log(remainder);

//Logical Operator
// ==, >, <, !=, <=, >=

var isItRaining = true;

isItRaining == true; //true

var someNumber = 100;

someNumber == 50 // false

someNumber >= 50 //true 

someNumber < 50 // false

"hello" == "hello"; //True
"goodbye" == "hello"; //false
"Hello" == "hello"; //false
"hello " == "hello"; //false

true == true; //true
true == false; // false
false == false; //true

sum > product; //false

var personAge =18;
// If Statement
// If    this is true      then run this
//If         ()                 {}

if (false) {
    console.log("Good Day.")
    console.log("Hello there.")
}

if (personAge >= 21) {
    console.log("You can buy alcohol legally.");
} else {
    console.log("Not old enough to drink legally!");
}

console.log("We power through!");

// function 
//Keyword         name of function       code block
//function        myFunction()            {}

function myFirstFunction() {
    console.log("The sun is out");
    console.log("Today will be warm and bright");
    console.log("Will not be humid");
}

var sunny = true;

if (sunny) {
    console.log("There is no need for an umbrella");
}

myFirstFunction();
myFirstFunction();
myFirstFunction();

