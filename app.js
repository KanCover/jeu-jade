const segments = [
  {
    name: "Rouge",
    theme: "Défis sportifs",
    color: "#f94144",
    challenges: [
      "Fais 10 sauts comme une grenouille.",
      "Fais 5 squats bien tranquilles.",
      "Cours sur place pendant 12 secondes.",
      "Fais 8 montées de genoux.",
    ],
  },
  {
    name: "Bleu",
    theme: "Équilibre",
    color: "#277da1",
    challenges: [
      "Tiens sur un pied pendant 10 secondes.",
      "Marche sur une ligne imaginaire sans tomber.",
      "Fais l'avion avec les bras pendant 8 secondes.",
      "Pose un objet sur ta tête et avance de 3 pas.",
    ],
  },
  {
    name: "Jaune",
    theme: "Danse",
    color: "#f9c74f",
    challenges: [
      "Danse pendant 10 secondes.",
      "Invente une danse de robot.",
      "Fais 4 pas de danse très exagérés.",
      "Danse sans bouger les pieds.",
    ],
  },
  {
    name: "Vert",
    theme: "Animaux",
    color: "#43aa8b",
    challenges: [
      "Imite un chat qui s'étire.",
      "Marche comme un pingouin.",
      "Fais le crabe pendant 6 pas.",
      "Imite ton animal préféré sans parler.",
    ],
  },
  {
    name: "Orange",
    theme: "Mimes",
    color: "#f8961e",
    challenges: [
      "Mime quelqu'un qui cuisine une soupe magique.",
      "Mime un astronaute qui marche sur la lune.",
      "Mime un joueur de foot au ralenti.",
      "Mime une personne qui ouvre un cadeau surprise.",
    ],
  },
  {
    name: "Violet",
    theme: "Voix et grimaces",
    color: "#7b61ff",
    challenges: [
      "Dis 'bonjour' avec une voix de monstre gentil.",
      "Fais ta meilleure grimace pendant 5 secondes.",
      "Raconte une mini phrase avec une voix de robot.",
      "Ris comme un méchant de dessin animé.",
    ],
  },
  {
    name: "Rose",
    theme: "Créativité",
    color: "#ff70a6",
    challenges: [
      "Prends une pose de super-héros.",
      "Invente un nom de planète rigolo.",
      "Fais une statue qui représente la joie.",
      "Imagine un sort magique et mime-le.",
    ],
  },
  {
    name: "Turquoise",
    theme: "Défis calmes",
    color: "#4cc9f0",
    challenges: [
      "Respire comme si tu gonflais un ballon 3 fois.",
      "Fais une statue sans bouger pendant 10 secondes.",
      "Dis un compliment à quelqu'un.",
      "Compte à rebours de 10 à 1 avec une voix douce.",
    ],
  },
];

const wheel = document.querySelector("#wheel");
const spinButton = document.querySelector("#spin-button");
const colorName = document.querySelector("#color-name");
const challengeText = document.querySelector("#challenge-text");
const legend = document.querySelector("#legend");

const segmentAngle = 360 / segments.length;
let currentRotation = 0;
let lastChallengeByColor = new Map();
let isSpinning = false;

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function getChallenge(segment) {
  const previous = lastChallengeByColor.get(segment.name);
  let next = segment.challenges[randomInt(segment.challenges.length)];

  if (segment.challenges.length > 1) {
    while (next === previous) {
      next = segment.challenges[randomInt(segment.challenges.length)];
    }
  }

  lastChallengeByColor.set(segment.name, next);
  return next;
}

function renderLegend() {
  legend.innerHTML = segments
    .map(
      (segment) => `
        <article class="legend-item">
          <span class="swatch" style="background: ${segment.color}"></span>
          <span>${segment.name} : ${segment.theme}</span>
        </article>
      `,
    )
    .join("");
}

function spinWheel() {
  if (isSpinning) {
    return;
  }

  isSpinning = true;
  wheel.disabled = true;
  spinButton.disabled = true;
  colorName.textContent = "Ça tourne...";
  challengeText.textContent = "La roue cherche un gage.";

  const selectedIndex = randomInt(segments.length);
  const selectedSegment = segments[selectedIndex];
  const pointerAngle = 0;
  const segmentCenter = selectedIndex * segmentAngle;
  const extraTurns = 5 + randomInt(4);
  const currentAngle = ((currentRotation % 360) + 360) % 360;
  const currentSegmentAngle = (segmentCenter + currentAngle) % 360;
  const targetDelta = (pointerAngle - currentSegmentAngle + 360) % 360;

  currentRotation += extraTurns * 360 + targetDelta;
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  window.setTimeout(() => {
    colorName.textContent = `${selectedSegment.name} : ${selectedSegment.theme}`;
    colorName.style.color = selectedSegment.color;
    challengeText.textContent = getChallenge(selectedSegment);
    isSpinning = false;
    wheel.disabled = false;
    spinButton.disabled = false;
  }, 4500);
}

renderLegend();
wheel.addEventListener("click", spinWheel);
spinButton.addEventListener("click", spinWheel);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // Le jeu reste utilisable même si le mode offline n'est pas disponible.
    });
  });
}
