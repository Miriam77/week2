$(document).ready(function() {
  
  //calling the button
    $("button#add").click(function(ev) {//<<<< (ev)event meaning
        var newCar = $("newDoc").val();

if(newCar == "") return;
        
   $("#newDoc").append("<li>"
       + newCar  + ' <button class="remove">(x)</button>' + "</li>");
        
        $("#newcar").val("");
    });
      $("#newDoc").click("button.remove", function(ev) {
        $(ev.target).parent().fadeOut();

});

});






