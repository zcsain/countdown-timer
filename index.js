let countDownDate = new Date("Nov 26, 2020 00:00:00").getTime();

let update = setInterval(function() {
  let now = new Date().getTime();
  let timeRemaining = countDownDate - now;

  // calculate DD-hh-mm-ss
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 *24));
  let hours = Math.floor((timeRemaining % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 *60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  let countdownRemaining = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  // Display timer to the HTML tag
  document.getElementById("countdown").innerHTML = countdownRemaining;

  // count down end message
  if (timeRemaining === 0) {
    clearInterval(update);
    document.getElementById("countdown").innerHTML = "Gotovi radovi!";
  }

}, 1000);
