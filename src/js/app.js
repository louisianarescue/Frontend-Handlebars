var templates  = require("./templates.js")

var home = function () {
  var main = document.getElementById("main")
  /* position Louisiana */
  var latlng = new google.maps.LatLng(30.984300, -91.962300);
  
  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 10
  };

  // render
  var html = templates.home({});
  main.innerHTML = html
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var callback = function(data) {
    $.each(data, function(key, data) {
      var latLng = new google.maps.LatLng(data.latitude, data.longitude);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    })
  }

  $.getJSON("http://louisianarescue.com/api/rescue/map", {
    format: "json"})
    .done(cb);
}

$(document).ready(function(){
  home();
})
