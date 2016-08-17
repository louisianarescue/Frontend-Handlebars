var homeView    = require("./views/home.hbs")
var rescueModal = require("./views/modals/rescue.hbs")

var home = function () {
  var main = document.getElementById("map-canvas")
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
    setup_ajax();
  })  

/**/
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);   
/**/

  var callback = function(data) {
    console.log(data);
    var html = homeView({request: data});
    $("#main").append(html); //this may not work exactly as expected?  seems to b good for now tho -Kevin
  
      
    $.each(data, function(key, data) {
      console.log(data);
      var rescuee = data.rescuee
      var latLng = new google.maps.LatLng(rescuee.latitude, rescuee.longitude);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    })
  }

  $.getJSON("http://www.louisianarescue.com/api/rescue/map", {
    ///request.json
    format: "json"
  })
    .done(callback);
}

var setup_ajax = function(){

  $('#submit_rescue').click(function(event){
    console.log("DF");
    key_val_pairs = [
      ['name', 'name'],
      ['people', 'people'],
//      ['level', 'level'],
//      ['pet', 'pet'],
      ['number', 'number'],
      ['email', 'email'],

      ['contact', 'contact'],
      ['address', 'address'],
      ['zip', 'zip'],
      ['info', 'info']
    ]
    var formData = {'pet': $('#pet').find("option:selected").text(),
                    'level': $('#level').find("option:selected").text()};
    for(i = 0; i < key_val_pairs.length; i++){
      formData[key_val_pairs[i][0]] = $('input[name='+key_val_pairs[i][1]+']').val() || null;
    }
console.log(formData);
    $this = $(this);
    $(this).button('loading');
    $.ajax({
            type        : 'POST', 
            url         : 'http://www.louisianarescue.com/api/rescue/help',//'http://127.0.0.1:80', 
            data        : formData, 
            dataType    : 'json',
            encode      : true
    })
    .done(function(data){
        //$this.button('')

            console.log("done");
    })
    .fail(function(){
          $this.button('reset');

      console.log("fucking failed");
    });
  });
}

$(document).ready(function(){
  home();
  setup_ajax();
})
