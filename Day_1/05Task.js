$(function() {

$("#para").click(function(ev) {
    //$("#para") $(this).fadeOut('slow','linear'); rescans the html to look for the id then performs it
   // $(this).fadeOut('slow','linear'); //this line has immediate access doesn't have to rescan
$(ev.target).fadeOut('slow','linear');

});
//$("")-> css : function (){}}
//var j = $("")

$("h3") //this is returning this so we can do things to it
.css("text-decoration","underline")
.css("font-weight", "normal"); //only put ; at the very end
//alllows you to add additional selectors to the item selected

//$(ul li: "first-child")vvv same thingvv better practice
$("ul").find("li:first-child")
    .css("color","red"); 

    //assignment list application take in user input and add it to a list

    


});