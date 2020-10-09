var timer = setInterval(function (){
    console.log("1 seconds have passed.")
}, 1000);

// Synchronous
console.log(1);
console.log(2);
console.log(3);

// Asynchronous
// this will take 3000 milli seconds to pop up on terminal after you rin

//clearIntervial is synchronous so it runs in order that will stop 
setTimeout(function() {
    console.log(5);

    clearInterval(timer);
}, 5000);

// var runsForever = setInterval(function (){
//    console.log("3 seconds have passed.")
// }, 3000);

//clearInterval (runsForever); this will stop the interval.

// This 6 will pop up first in terminal before the 5 becuae its not in a timeout. it runs even if placed after the other console.log because its not affected by the tiomout
console.log(6); 

//closures 

var myGlobalVariable = 100;

function someFunction(){
    var myLocalVariable = 10;

    console.log(myLocalVariable);

    console.log(myGlobalVariable);
}

//console.log(myLocalVariable); cannot access myLocalVariable because it is in a child scope.

// If statements do not have scopes.
if (true) {
    // Code to run 
}

if (false) {
    // Code to run
}

// Example 

if (true) {
    var createdVariable = 300;
}

console.log(createdVariable);