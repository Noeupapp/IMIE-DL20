var map;

function initMap(){

    var nantes = {lat:47.22, lng: -1.55};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: nantes
    });
}

function setMarker(lat,lng){
    var position = {lat:lat,lng:lng}
    var marker = new google.maps.Marker({
          position: position,
          map: map
        });
}