let countDownDate = new Date("Nov 26, 2020 00:00:00").getTime();

let lolFact = ["The capital city of the Noxian Empire was founded around the Immortal Bastion; the citadel of a dreaded revenant who terrorized Valoran for centuries.",
  "The Brackern, a race of enormous, crystal-bodied scorpions, slumber in the sands beneath a hidden valley in Shurima.",
  "Sai Kahleek is one of Shurima's most feared deserts, as it is populated by the ravenous Xer'Sai.",
  "Many Voidborn have names originating from the ancient Shuriman language.",
  "The God-Willow was an ancient tree found in Ionia, before being felled by Ivern the Cruel.",
  "Much of Bilgewater's export comes from the valuable goods harvested from the carcasses of sea monsters gutted at the Slaughter Docks.",
  "Miss Fortune's guns were crafted by her mother for a young Gangplank, who turned the guns on their creator.",
  "Legends speak of a realm beyond Mount Targon's peak, inhabited by great celestial beings known as the Aspects.",
  "Using lime, ash and the fossilized bark of ancient trees, Demacians create petricite; magic absorbing stone with which they built their walls.",
  "Sometimes known as silver steel or rune steel, Demacian steel is coveted for its durability, light weight and its unique interactions with magic.",
  "Garen and Lux are siblings of the Crownguard family, who traditionally serve as the royal protectors.",
  "Fiora serves as the head of House Laurent in Demacia, a position she claimed upon killing her father in a duel.",
  "When Zaun's plans to create a waterway between east and west Valoran went awry, Janna prevented thousands of deaths and is now revered by many as a goddess.",
  "Artifacts of True Ice hold incredible power, but only the Iceborn can wield them.",
  "Before becoming an Ice Witch, Lissandra was permanently blinded by an Ursine's claws.",
  "It is said the passage of time is different in Bandle City, giving yordles a timeless nature.",
  "Because of their glamour, the true form of a yordle is difficult for normal humans to perceive.",
  "Before the Ruination, the Shadow Isles were known as the Blessed Isles.",
  "Mordekaiser's mace is named Nightfall."
]

let randomFact = ["this", "that", "those", "Fun fact: stručnjaci kažu da radovi traju 2-3 tjedna"];

let update = setInterval(function() {

  let now = new Date().getTime();
  let timeRemaining = countDownDate - now;

  // calculate DD-hh-mm-ss
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  let countdownRemaining = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  // Display timer to the HTML tag
  document.getElementById("countdown").innerHTML = countdownRemaining;

  // let tickSound = new Audio("tom-4.mp3");
  // tickSound.play();
  //
  // // Simulate click for audio to play
  // document.click();

  // count down end message
  if (timeRemaining === 0) {
    clearInterval(update);
    document.getElementById("countdown").innerHTML = "Gotovi radovi!";
  }

}, 1000);

let fact = setInterval(function() {
  $("#fact").fadeOut(1750);

  let randNum = Math.floor(Math.random() * randomFact.length);

  setTimeout(function() {
    $("#fact").text(lolFact[randNum]);
  }, 1750);

  $("#fact").fadeIn(1750);
}, 7000)
