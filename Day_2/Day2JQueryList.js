$(function() {
  // $("#add")-= document.getElementById("add")
  $("button#add").click(function(ev){
var ZepSongs = $("#ZepSongs").val();
if(ZepSongs == "") return;
$("#list").append ("<li>" + ZepSongs = '<button class="remove">(x)</button>' = "<li>");
$("#ZepSongs").val("");

  });
$("#list").click("button.remove", function(ev) {
        $(ev.target).parent().fadeOut();
});