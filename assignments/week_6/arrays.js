var myVar = 150;

myVar = 250;

myVar = 150;

var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

var months = [
    "september",
    "october",
    "november"
];

var mixedArray = [150, "Hi", true];

console.log(daysOfTheWeek[0]);

console.log(mixedArray[4]);

console.log (mixedArray);

mixedArray[1] = "Hello world!";

console.log(mixedArray);

mixedArray[3] = 1005;

console.log(mixedArray);

mixedArray[1] = null,

console.log(mixedArray);

var emptyArray = [];
//Array Methods

//Array push 
emptyArray.push("first item.");

console.log(emptyArray);

emptyArray.push(10000);

emptyArray.push(false);

console.log(emptyArray);

//Array pop 

emptyArray.pop();

console.log(emptyArray);

emptyArray.pop();
emptyArray.pop();

console.log(emptyArray);

//Array Unshift will add "madeupday" to the beggining of the daysOfTheWeek array 

daysOfTheWeek.unshift("madeupday");

console.log(daysOfTheWeek);

// Array Shift  will remove a value at the beginning of the daysOfTheWeek array.

daysOfTheWeek.shift();

console.log(daysOfTheWeek);


// Array ForEach
/*
listOfItemsArray.forEach(function (eachItem) {
    use eachItem how ever you want
}) */
daysOfTheWeek.forEach( function(weekdays) {
    console.log(weekdays);
} );

// Loops and Arrays shown are underneath 

var setOfNumbers = [1, 5, 10, 200, 3000,50000, 199, 219, 42, 40, 500, 1997, 3280, 37];

//console.log(setOfNumbers[0] *5); this will grab the 1 in the array and multiply it by 5
//console.log(setOfNumbers[1] *5); this will grab the 5 in the array and multiply it by 5
//console.log(setOfNumbers[2] *5); this will grab the 10 in the array and multiply it by 5

for (var i = 0; i < setOfNumbers.length; i = i + 1) {
    var product = setOfNumbers[i] * 5;
    console.log(product);
}

// Below is an Array inside another Array, its called a   multidimensial array.
var masterArray = [
    [20, 58],
    [28, 40],
    [100, 24]
];

masterArray[1].length;
(masterArray[2][0]); // This will grab the number 100 from the third array inside of this array. The 2 will represnt the 3rd line and the 0 represents the first value inside that array.