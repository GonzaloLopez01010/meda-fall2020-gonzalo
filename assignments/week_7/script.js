$(document).ready(function (){
    
    setTimeout(function (){
        var box = $("#thisBox"); 
        box.css("background-color","red");
    }, 3200);

    setTimeout(function (){
        var box = $("#thisBox"); 
        box.css("background-color","blue");
    }, 6200);

    var greenButton = $("#green-button");

    greenButton.click(function () {
        $("#thisBox").css("background-color", "green");
    });

    var yellowButton = $("#yellow-button");

    yellowButton.click(function () {
        $("#thisBox").css("background-color", "yellow");
    });

    var brownButton = $("#brown-button");

    brownButton.click(function (){
        $("#thisBox").css("background-color", "brown");
    });

});
