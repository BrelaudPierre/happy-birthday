const more = document.getElementById("more");
const main = document.getElementById("main");
const landing = document.getElementById("landing");

const yearsScroll = document.getElementById("yearsscroll");
const birthday = document.getElementById("birthday");

const goodDate = document.getElementById("good-date");
const wrongDates = document.querySelectorAll(".row:not(#good-date)");

var canvas = document.createElement("canvas");

// CONFETTI
canvas.id = "confetti";
document.body.appendChild(canvas);

var myConfetti = confetti.create(canvas, {
  resize: true,
  useWorker: true,
});

const triggerConfetti = () => {
  myConfetti({
    clock: 40,
    particleCount: 200,
    spread: 90,
    colors: ["#b45d6b", "#77344A", "#C47674"],
  });
};

triggerConfetti();

const confettiInterval = setInterval(() => {
  triggerConfetti();
}, 4000);

// MENU
const onMenuClick = () => {
  main.classList.toggle("visible");
};

// DATE SCROLL
const up = document.getElementById("up");
const down = document.getElementById("down");
let yearsPos = 0;
const scrollSpeed = 40;
const yearsHeight = yearsScroll.offsetHeight;

up.addEventListener("click", () => {
  if (yearsPos + scrollSpeed <= 0) yearsPos += scrollSpeed;
  yearsScroll.style.top = yearsPos;
});

down.addEventListener("click", () => {
  yearsPos -= scrollSpeed;
  yearsScroll.style.top = yearsPos;
});

// DATES
goodDate.addEventListener("click", () => {
  triggerConfetti();
});

const errorMessages = {
  title: "??? 🤔🤔🤔",
  message: "Peut être que c'est l'âge qui vous fait cliquer n'importe où !",
};

const wrongMessages = {
  title: "Bien essayé !",
  message:
    "Désolé de vous informer que vous n'êtes plus si jeune que ça ! 👵🏻👵🏻👵🏻",
};

const yearsPopup = document.getElementById("years-popup");
const yearsPopupCurtain = document.getElementById("years-popup-curtain");
const yearsPopupContent = document.getElementById("years-popup-content");
const yearsPopupTitle = document.getElementById("years-popup-title");
const yearsPopupMessage = document.getElementById("years-popup-message");

yearsPopupCurtain.addEventListener("click", () => {
  yearsPopup.classList.remove("visible");
  yearsPopupContent.classList.remove("visible");
});

wrongDates.forEach((date) => {
  date.addEventListener("click", () => {
    const type = date.dataset.type;
    if (type === "wrong") {
      yearsPopupTitle.innerHTML = wrongMessages.title;
      yearsPopupMessage.innerHTML = wrongMessages.message;
    }
    if (type === "error") {
      yearsPopupTitle.innerHTML = errorMessages.title;
      yearsPopupMessage.innerHTML = errorMessages.message;
    }
    yearsPopup.classList.add("visible");
    yearsPopupContent.classList.add("visible");
  });
});

const successPopup = document.getElementById("success-popup");
const successPopupCurtain = document.getElementById("success-popup-curtain");
const successPopupContent = document.getElementById("success-popup-content");
const successPopupTitle = document.getElementById("success-popup-title");
const successPopupMessage = document.getElementById("success-popup-message");
const successPopupButton = document.getElementById("success-popup-button");

const successStep1 = {
  title: "Félicitation ! 🎉🎉🎉",
  message:
    "Épreuve réussie ! Pas trop mal au pouce ? Je vais passer sur les faits marquants de l'année 1984 pour pas que ça fasse trop mal (J'ai regardé c'est pas tout jeune).",
  button: "Suivant",
};

const successStep2 = {
  title: "Quelle couleur pour l'année prochaine ?👩‍🦰👩‍🦳",
  message:
    "Petit défi maintenant ! Tirez une couleur aléatoirement, celle-ci devra être teinte avant le prochain anniversaire ! En cliquant sur 'jouer' vous vous engagez à effectuer cette teinture dans un délai inférieur à 1 an !",
  button: "Jouer",
};

const successStep3 = {
  title: "Quelle couleur pour l'année prochaine ?👩‍🦰👩‍🦳",
  message: "",
  button: "Suivant",
};

const successStep4 = {
  title: "Vous touchez au but !",
  message:
    "A vous de découvrir cette application ! Pour ne pas bousculer vos habitudes ce projet répond aux critères standards à savoir : Bugs (appelés aussi features), retards et d'autres surprises à découvrir. N'hésitez pas à créer des tickets.",
  button: "Découvrir",
};

let currentStep = 1;
// STEP 1
goodDate.addEventListener("click", () => {
  successPopupTitle.innerHTML = successStep1.title;
  successPopupMessage.innerHTML = successStep1.message;
  successPopupButton.innerHTML = successStep1.button;
  successPopup.classList.add("visible");
  successPopupContent.classList.add("visible");
});

//STEP 2 & 3 & 4
successPopupButton.addEventListener("click", () => {
  if (currentStep == 1) {
    successPopupCurtain.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    successPopupTitle.innerHTML = successStep2.title;
    successPopupMessage.innerHTML = successStep2.message;
    successPopupButton.innerHTML = successStep2.button;
    currentStep = 2;
  } else if (currentStep == 2) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    successPopupCurtain.style.backgroundColor = randomColor;
    successStep3.message = `Bravo, la couleur choisie est la suivante : ${randomColor} 😬. N'oubliez pas de la noter pour vous en souvenir ! 😉`;
    successPopupTitle.innerHTML = successStep3.title;
    successPopupMessage.innerHTML = successStep3.message;
    successPopupButton.innerHTML = successStep3.button;
    currentStep = 3;
  } else if (currentStep == 3) {
    successPopupTitle.innerHTML = successStep4.title;
    successPopupMessage.innerHTML = successStep4.message;
    successPopupButton.innerHTML = successStep4.button;
    currentStep = 4;
  } else {
    landing.classList.add("hide");
  }
});

successPopupCurtain.addEventListener("click", () => {
  currentStep = 1;
  successPopupCurtain.style.backgroundColor = "rgb(0, 0, 0, 0.8)";
  successPopupTitle.innerHTML = successStep1.title;
  successPopupMessage.innerHTML = successStep1.message;
  successPopupButton.innerHTML = successStep1.button;
  successPopup.classList.remove("visible");
  successPopupContent.classList.remove("visible");
});

// TOGGLE MENU

const menuMore = document.getElementById("menu-more");
const menuMinus = document.getElementById("menu-minus");

more.addEventListener("click", () => {
  menuMore.classList.toggle("hide");
  menuMinus.classList.toggle("hide");
  main.classList.toggle("visible");
  more.classList.toggle("active");
});

// TOGGLE DATES
birthday.addEventListener("click", () => {
  years.classList.toggle("visible");
  clearInterval(confettiInterval);
});
