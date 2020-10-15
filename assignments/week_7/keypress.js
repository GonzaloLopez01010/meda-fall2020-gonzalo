$(document).ready(function (){

    $("#atextbox").keypress(function (event) {

        if (event.which === 97) {
            event.preventDefault();
            $("#atextbox").val("append");
        }
    });

    $(document).keypress(function (event){

        console.log("Type")

        var theKeyPressed = event.which;

        console.log(theKeyPressed);

        console.log(event);

        if(event.which === 103){
            $("body").append("<div style='width: 110px; height: 110px; background-color: beige; display: inline-block'></div>");
        }

        if(event.which === 98){
            $("body").append("<div style='width: 110px; height: 110px; background-color: gray; display: inline-block'></div>");
        }

        if(event.which === 114){
            $("body").append("<div style='width: 110px; height: 110px; background-color: black; display: inline-block'></div>");
        }

    });

});