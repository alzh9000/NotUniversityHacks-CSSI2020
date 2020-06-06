$(document).ready(function() {
});

var geocoder;

//LOCATION SCRIPTS//
function getLocation() {
  if (navigator.geolocation) navigator.geolocation.getCurrentPosition(showPosition, showError);
  else alert("Geolocation is not supported by this browser.");
}

function showPosition(position) { //change later
  localStorage.setItem('pos', position.coords);
  $("#location").css("opacity", 1);
  let posString = position.coords.latitude +
    "," + position.coords.longitude;
  geocodeLatLng(posString, geocoder);
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.error("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.error("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.error("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.error(`An unknown error occurred: ${error}`);
      break;
  }
}

//REVERSE GEOCODING//

function initMap() {
  geocoder = new google.maps.Geocoder;
  document.getElementById('enter-auto').addEventListener('click', function(){
    getLocation();
  });
}

function geocodeLatLng(input, geocoder) {
  var latlngStr = input.split(',', 2);
  var latlng = {
    lat: parseFloat(latlngStr[0]),
    lng: parseFloat(latlngStr[1])
  };
  geocoder.geocode({
    'location': latlng
  }, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        convertState(results[0].address_components[4].long_name);
      } else {
        alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
  });
}

function convertState(state){
  console.log(state.replace(/\s/g, '').toLowerCase());
}
