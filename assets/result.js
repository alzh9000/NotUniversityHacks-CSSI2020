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
}

function getCountdown() {
  // Set the date to the next drought date
  var countDownDate = new Date("June 7, 2022 18:37:25").getTime(); //TEMPORARY
  // Update the count down every 1 second
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * (365 / 12)));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * (365 / 12))) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = years + "y " + months + "m " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";
  }, 1000);
}

function goHome() {
  window.location.href = "index.html";
}
