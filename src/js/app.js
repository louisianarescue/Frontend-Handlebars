var page        = require('page')
var homeView    = require('./views/home.hbs')
var rescueModal = require('./views/modals/rescue.hbs')

$.ajaxSetup({
  accepts: 'application/json',
  api: true,
  beforeSend: function (xhr, settings) {
    if(settings.api == true) {
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
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);   

  $.each(ctx.data.request, function(key, data) {
    var rescuee = data.rescuee
    if(typeof rescuee != 'undefined') {

      var latLng = new google.maps.LatLng(rescuee.latitude, rescuee.longitude);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    }
  })
}


var loadRescue = function(ctx, next) {
  $.getJSON("/rescue", function(data) {
    ctx.data = data;
    next();
  });
}

// routes

page("/", loadRescue, home)

$(document).ready(function(){
  page({click: false});
})
