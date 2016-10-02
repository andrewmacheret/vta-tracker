var url = 'http://andrewmacheret.com/servers/vta/find_routes';
var interval = 10000;


var onError = function(jqXHR, textStatus, errorThrown) {
  alert('jqXHR: ' + jqXHR + ' textStatus: ' + textStatus + ' errorThrown: ' + errorThrown);
};

$(function() {
  var mapOptions = {
    center: { lat: 37.35, lng: -121.9},
    zoom: 10
  };
  
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var markers = []; 
  var loadMarkers = function() { 
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: url,
      //crossDomain: true,
      success: function(data, textStatus, jqXHR) {
        if (!data || !data.success) {
          //onError(jqXHR, textStatus, JSON.stringify(data, 0, 4));
          return;
        }
        //console.log(data);
        
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];

        var results = data.results;
        for (var i = 0; i < results.length; i++) {
          var result = results[i];
          var position = new google.maps.LatLng(
            result.current_lattitude,
            result.current_longitude
          );
          var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: 'Route ' + result.route_id,
            icon: 'bus.png'
          });
          markers.push(marker);
        }
      },
      error: onError
    });
  };

  window.setInterval(loadMarkers, interval);
  loadMarkers();
});

