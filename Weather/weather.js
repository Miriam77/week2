
$(function () {
    $("button#add").click(function (ev) {
        var zipcode = $("#zipcode").val();


        if (zipcode == "") return;

        $("#list").append("<li>"
            + zipcode + ' <button class="remove">(x)</button>' + "</li>");

        $("").val("");


        $("#list").click("button.remove", function (ev) {
            $(ev.target).parent().fadeOut();



            $.ajax("https://api.darksky.net/forecast/8b07e5441d304f181be557afd306351d/37.8267,-122.4233")
                .done(function (data) {
                    $("#weather").append(data.temperature + data.icon);

                });

