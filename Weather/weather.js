$(function () {

  //button
  $(function () {
    $("button#get").click(function (ev) {
      var zipcode = $("#newzip").val();

      //google
      $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyAx1-F-swzH31k5PfXFhEG_TRcfdp69PqQ", { dataType: "json" }).done(function (data) {
        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        var city = data.results[0].address_components[1].long_name;
        var state = data.results[0].address_components[3].short_name;
        console.log(data);
        //darksky
        $.ajax("https://api.darksky.net/forecast/bcaf790b600851512d4bd14890a70a50/" + lat + "," + lng, { dataType: "jsonp" }).done(function (data) {
          var temp = Math.round(data.currently.temperature) + "&deg;";
          var maxTemp = Math.round(data.daily.data[0].apparentTemperatureMax) + "&deg;";
          var minTemp = Math.round(data.daily.data[0].apparentTemperatureMin) + "&deg;";
          console.log(data);
          $(".getTemp").append("Current:  ", temp, "<br/>", "High:  ", maxTemp, "<br/>", "Low:  ", minTemp, "<br/>", city, ",", state);

        });
      });
    });
  });
});




