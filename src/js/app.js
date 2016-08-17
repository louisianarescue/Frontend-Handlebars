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
  
  $('a[data-target="RequestModal"]').click(function(e) {
    var $modal = $("#modal")
    var modal  = rescueModal({});
    $modal.html(modal).modal()
  })  

  var callback = function(data) {
    var html = homeView({request: data});
    $(main).html(html);
  
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);   
      
    $.each(data, function(key, data) {
      var rescuee = data.rescuee
      var latLng = new google.maps.LatLng(rescuee.latitude, rescuee.longitude);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    })
  }

  $.getJSON("/request.json", {
    format: "json"})
    .done(callback);
}

$(document).ready(function(){
  home();
})
