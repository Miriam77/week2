
$(function () {
    $("button#add").click(function (ev) {
        var zipcode = $("#zipcode").val();


        if (zipcode == "") return;

        $("#list").append("<li>"
            + zipcode + ' <button class="remove">(x)</button>' + "</li>");

        $("").val("");


        $("#list").click("button.remove", function (ev) {
            $(ev.target).parent().fadeOut();



            $.ajax("http://rest.learncode.academy/api/learncode/friends/57e2c05d1ebec6010006184f") //adding a single person
.done(function (data){
    $("#me").append(data.name + " likes " + data.drink); //pulling the data from the http

  });
 });
