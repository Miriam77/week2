
$(function () {

 
//google
   $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=41501&key=AIzaSyAx1-F-swzH31k5PfXFhEG_TRcfdp69PqQ").done(function(data) {
       var lat = data.results[0].geometry.location.lat;
       var lng = data.results[0].geometry.location.lng;
       console.log(lat,lng);
   });
   $.ajax("https://api.darksky.net/forecast/bcaf790b600851512d4bd14890a70a50" + "/37.8145,82.8071", { dataType: "jsonp"}).done(function(data) {
      console.log(data);
      $(".getTemp").append(data.currently.temperature, data.summary)



     
});





