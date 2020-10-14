// We are creating a button that will change the background color from a selection of 16.7 milllion colors.

Math.random(); // generates a random number bettween 0 to .9~, ~ means it goes infinetely

$(document).ready(function(){

    $("#bgchanger").click(function(){

        var redColour = Math.random() * 256; 
        // range goes from 0 to 255.9~

        var redColour = Math.floor(redColour);

        var greenColour = Math.random() * 256;

        var greenColour = Math.floor(greenColour);

        var blueColour = Math.random() * 256;

        var blueColour = Math.floor(blueColour);


        var rgbValues= `rgb( ${redColour}, ${greenColour}, ${blueColour})`;

        var rgbTextInfo= `<p>${rgbValues}</p>`;


        $("body").css("background-color", rgbValues);
        $("body").append(rgbTextInfo);
    });

});