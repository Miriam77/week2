$(function() {


//var url = "http://rest.learncode.academy/api/learncode/friends"
//$.ajax(url).done(function(data) {
//$("#friend").html(data.name + " likes " + data.drink);




//for (var i in data){
  //  var text = data [i];
    //$("#list").append("<li>" + text + "<li>");
//}



//});
$.ajax("http://rest.learncode.academy/api/learncode/friends/57e2c80c1ebec60100061872") //adding a single person
.done(function (data){
    $("#me").append(data.name + " likes " + data.drink); //pulling the data from the http

  });


});