function add(num1, num2) {
    var sum= num1 + num2;
    return sum;
}

function subtract(num1, num2,reverse) {
    if(reverse ==true) {
        var difference = num2 - num1;} else{
            var diffierence = num1 - num2;
        }
    return difference;
}

function multiply(num1, num2) {
    var product = num1 * num2;
    return product;
}

function divide(num1, num2) {
    var quotient = num1 / num2;
    return quotient;
}

function circlreArea(radius) {
    var radiusSquare = multiply(radius, radius);
    var pi = Math.PI;

    var area = multiply(radiusSquare, pi)

    return area;
}

function totalSum3Times(num1, num2){
    var firstSum = add(num1, num2);
    var secondSum = add(num2 + 1, firstSum);
    var thirdSum = add(num2 + 2, secondSum);
    return thirdSum;
}

var results = totalsum3times(4,5);

console.log(results);

console.log( subtract(50, 100, false) );
console.log( subtract(100, 50, true) ) ;