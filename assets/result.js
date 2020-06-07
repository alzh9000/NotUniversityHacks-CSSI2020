$(document).ready(function() {
  initData();
});

let state;

function initData() {
  state = sessionStorage.getItem("state");
  if (state) {
    $('#your-location').html(state);
    getCountdown();
    $('.with-location').show();
  } else $('.without-location').show();
  $("#blank").delay(300).fadeOut(1000);
}

droughts = {
    "AL": [6.3591061], "NE": [8.542291657],
    "AK": [24.18584342],"NV": [13.94719003],
    "AZ": [22.09436547],"NH": [15.39530603],
    "AR": [9.376725643],"NJ": [8.827111256],
    "CA": [15.38587718],"NM": [8.771663723],
    "CO": [14.23727665],"NY": [8.469525933],
    "CT": [19.28982432],"NC": [14.49008664],
    "DE": [5.346489759],"ND": [10.24454036],
    "DC": [22.71808378],"OH": [3.537242672],
    "FL": [3.708686881],"OK": [23.93944938],
    "GA": [23.894128],"OR": [16.91135807],
    "HI": [13.8191767],"PA": [19.05735907],
    "ID": [22.05700229],"RI": [27.8135853],
    "IL": [3.052651334],"SC": [24.49866322],
    "IN": [14.13467985],"SD": [6.022248995],
    "IA": [21.03850081],"TN": [11.31737972],
    "KS": [8.719055524],"TX": [21.03711059],
    "KY": [26.63176739],"UT": [20.77979424],
    "LA": [25.53568644],"VT": [26.41101489],
    "ME": [3.764749576],"VA": [13.552675],
    "MD": [3.63614655],"WA": [23.75089233],
    "MA": [16.53531182],"WV": [19.75763916],
    "MI": [26.47872918],"WI": [10.58421287],
    "MN": [12.53010594],"WY": [17.68951535],
    "MS": [8.414985091],
    "MO": [13.55291439],"PR": [7.647656694],
    "MT": [3.726019689]
}

function getCountdown() {
  let now = new Date(2020);
  let countDownDate = new Date(2020+Math.ceil(droughts[state])); //TEMPORARY
  // Update the count down every 1 second
  let x = setInterval(function() {
    let distance = countDownDate - now;
    console.log(distance);
    let years = Math.floor(distance);
    let months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * (365 / 12)));
    let days = Math.floor((distance % (1000 * 60 * 60 * 24 * (365 / 12))) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = years + "y " + months + "m " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";
  }, 1000);
}

function goHome() {
  $("#blank").fadeIn(100);
  window.location.href = "index.html";
}

randomNumber = Math.floor(Math.random()*5+1);

window.onload = function() {
	if (randomNumber == 1) {
		document.getElementById("tip1").style.display = "inline";
		document.getElementById("tip2").style.display = "none";
		document.getElementById("tip3").style.display = "none";
		document.getElementById("tip4").style.display = "none";
        document.getElementById("tip5").style.display = "none";
	}
	if (randomNumber == 2) {
		document.getElementById("tip1").style.display = "none";
		document.getElementById("tip2").style.display = "inline";
		document.getElementById("tip3").style.display = "none";
		document.getElementById("tip4").style.display = "none";
        document.getElementById("tip5").style.display = "none";
	}
	if (randomNumber == 3) {
		document.getElementById("tip1").style.display = "none";
		document.getElementById("tip2").style.display = "none";
		document.getElementById("tip3").style.display = "inline";
		document.getElementById("tip4").style.display = "none";
        document.getElementById("tip5").style.display = "none";
	}
	if (randomNumber == 4) {
		document.getElementById("tip1").style.display = "none";
		document.getElementById("tip2").style.display = "none";
		document.getElementById("tip3").style.display = "none";
		document.getElementById("tip4").style.display = "inline";
        document.getElementById("tip5").style.display = "none";
	}
    if (randomNumber == 5) {
		document.getElementById("tip1").style.display = "none";
		document.getElementById("tip2").style.display = "none";
		document.getElementById("tip3").style.display = "none";
		document.getElementById("tip4").style.display = "none";
        document.getElementById("tip5").style.display = "inline";
	}
}
