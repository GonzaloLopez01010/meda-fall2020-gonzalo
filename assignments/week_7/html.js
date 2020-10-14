$(document).ready(function (){
    
    setTimeout(function (){
        $("body").append("<div id='content'></div>");
        // .append adds a new children element at the end of the existing childrens list . 

        $("div#content").html("<p>Hello World.</p>");
        // .html will reolace the existing children elements for the element chosen  with what we gave our argument.

        $("body").prepend("<h1>This page is multidimensional.</h1>");
        //Unlinke append , .prepend adds to the beggining of children's list.

    }), 5000;

    var myFavFruit = "peach";

    var newHTMLCode =
    `<ul>
        <li>${myFavFruit}</li>
        <li>apple</li>
        <li>cantaloupe</li>
    </ul>`;

    $("body").append(newHTMLCode);

    $("button#create-box").click(function() {
        
        $("body").append(`<div style='width: 110px;
        height: 110px; border: 1px black solid;'></div>`
        );
    });

});