$(document).ready(function() {
  initData();
});

function initData() {
  let state = sessionStorage.getItem("state");
  if (state) {
    $('#your-location').html(state);
    getCountdown();
    $('.with-location').show();
  } else $('.without-location').show();
  $("#blank").delay(300).fadeOut(1000);
}

function getCountdown() {
  // Set the date to the next drought date
  let countDownDate = new Date("June 7, 2022 18:37:25").getTime(); //TEMPORARY
  // Update the count down every 1 second
  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
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