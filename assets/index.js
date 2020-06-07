$(document).ready(function() {
  //header buttons//
  $("#searchInput").on('keyup', function() {
    searchAndFilter($(this).val());
  });
  $("#searchInput").click(function() {
    searchAndFilter($(this).val());
  });
  $('#states li').click(function(e){
    goResult(e.target.id);
  });

  $("#blank").fadeOut(500);
});

function goResult(state) {
  $("#blank").fadeIn(100);
  sessionStorage.setItem("state",state);
  window.location.href = "result.html";
}

let geocoder;

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
  document.getElementById('enter-auto').addEventListener('click', function() {
    getLocation();
  });
  document.getElementById('enter-auto-2').addEventListener('click', function() {
    getLocation();
  });
}

function geocodeLatLng(input, geocoder) {
  let latlngStr = input.split(',', 2);
  let latlng = {
    lat: parseFloat(latlngStr[0]),
    lng: parseFloat(latlngStr[1])
  };
  geocoder.geocode({
    'location': latlng
  }, function(results, status) {
    if (status === 'OK') {
      if (results[0]) goResult(results[0].address_components[4].short_name);
      else alert('No results found');
    }
    else alert('Geocoder failed due to: ' + status);
  });
}

//STATE LIST//

function searchAndFilter(searchTerm) {
  searchTerm=searchTerm.toLowerCase();
  if (searchTerm == '') {
    $("#states").hide();
  } else {
    $("#states li").each(function() {
      if($(this).text().toLowerCase().startsWith(searchTerm)) {
        $(this).show();
        if(!$("#states").is(":visible")) $("#states").show();
      }
      else $(this).hide();
    });
  }
}
