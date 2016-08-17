var page        = require('page')
var homeView    = require('./views/home.hbs')
var rescueModal = require('./views/modals/rescue.hbs')

$.ajaxSetup({
  accepts: 'application/json',
  api: true,
  beforeSend: function (xhr, settings) {
    if(settings.api === true) {
      settings.url = "http://www.louisianarescue.com/api" + settings.url;
    }
  }
});

var home = function (ctx) {
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

  var html = homeView(ctx.data);
  $(main).html(html);

  var mapEl  = document.getElementById("map-canvas");
  var map    = new google.maps.Map(mapEl, mapOptions);   
  var bounds = new google.maps.LatLngBounds();

  $.each(ctx.data.request, function(key, data) {
    var location = data.location

    if(typeof location != 'undefined') {
      var latLng = new google.maps.LatLng(location.lat, location.lng);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });

      bounds.extend(marker.position);
    }

    // Don't zoom in too far on only one marker
    if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
      var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
      var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
      bounds.extend(extendPoint1);
      bounds.extend(extendPoint2);
    }
    
    map.fitBounds(bounds);
  })

  $(window).resize(function() {
    if($(window).width() < 750) {
      $(mapEl).css("height", "200px")
    } else {
      $(mapEl).css("height", $(window).height() - 20)
    }
    
    google.maps.event.trigger(map, "resize");
    
  }).resize();
}

var loadRescue = function(ctx, next) {
  $.getJSON("/rescue", function(data) {
      ctx.data = data;
      next();
  })
}

// routes

page("/", loadRescue, home)

$(document).ready(function(){
  page({click: false});
})
