var homeView    = require("./views/home.hbs")
var rescueModal = require("./views/modals/rescue.hbs")

var home = function () {
  var main = document.getElementById("main")
  /* position Louisiana */
  var latlng = new google.maps.LatLng(30.984300, -91.962300);
  
  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 10
  };

  var html = homeView({});
  $(main).html(html);
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  $('a[data-target="RequestModal"]').click(function(e) {
    var $modal = $("#modal")
    var modal  = rescueModal({});
    $modal.html(modal).modal()
  })
  
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
    .done(callback);
}

$(document).ready(function(){
  home();
})
