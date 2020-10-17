$(document).ready(function (){
    
    $("#plus").click(function(){
        var myFirstNumberString= $("#number1").val();
        var mySecondNumberString = $("#number2").val();

         var myFirstNumberConverted = parseInt(myFirstNumberString)
         var mySecondNumberConverted = parseInt(mySecondNumberString)
          /*This converts after reading the first characther  */

        /*
        "hi" will be Nan
        "200Hi" will be 100;
        "200" = 200
        "Hi200" = NaN
        "76j53done1" =  76
        true will be NaN , in other languages true = 1
        */

       if ( isNaN(myFirstNumberConverted) || isNaN(mySecondNumberConverted)) {
           $("#theresults").html("Error: My other numbers is not a number!");
           $("#theresults").css("color", "red");
       } else {
           var sum = myFirstNumberConverted + mySecondNumberConverted;
           $("#results").html(sum);
           $("#results").css("color", "black");


       }


    });
});