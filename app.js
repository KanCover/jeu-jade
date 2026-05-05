const levels = {
  little: {
    label: "Petit explorateur",
    ages: "3-5 ans",
    note: "Défi très simple : on peut le faire avec l'aide d'un adulte.",
  },
  middle: {
    label: "Aventurier",
    ages: "6-7 ans",
    note: "Défi court et dynamique : on joue sans chercher la performance.",
  },
  big: {
    label: "Champion rigolo",
    ages: "8-10 ans",
    note: "Défi plus créatif ou coordonné : chacun fait à sa façon.",
  },
};

const segments = [
  {
    name: "Rouge",
    theme: "Bouger",
    color: "#f94144",
    intent: "Motricité globale sans performance.",
    challenges: [
      { level: "little", text: "Fais 3 petits sauts comme une grenouille." },
      { level: "little", text: "Tape doucement des pieds 5 fois comme un géant." },
      { level: "middle", text: "Fais 8 sauts étoile, ou 4 si tu préfères." },
      { level: "middle", text: "Cours sur place pendant 10 secondes." },
      { level: "big", text: "Fais 12 montées de genoux en gardant le sourire." },
      { level: "big", text: "Invente un mini échauffement de champion en 3 mouvements." },
    ],
  },
  {
    name: "Bleu",
    theme: "Équilibre",
    color: "#277da1",
    intent: "Stabilité, repères corporels et confiance.",
    challenges: [
      { level: "little", text: "Tiens sur un pied pendant 3 secondes, avec aide si besoin." },
      { level: "little", text: "Marche lentement comme sur un petit pont imaginaire." },
      { level: "middle", text: "Fais l'avion avec les bras pendant 8 secondes." },
      { level: "middle", text: "Avance de 5 pas très lents sans te presser." },
      { level: "big", text: "Tiens sur un pied et compte jusqu'à 10." },
      { level: "big", text: "Fais 4 pas en arrière très doucement, puis une pose finale." },
    ],
  },
  {
    name: "Jaune",
    theme: "Danse",
    color: "#f9c74f",
    intent: "Expression libre, rythme et lâcher-prise.",
    challenges: [
      { level: "little", text: "Danse avec les mains pendant 5 secondes." },
      { level: "little", text: "Fais une danse de papillon." },
      { level: "middle", text: "Invente une danse de robot pendant 10 secondes." },
      { level: "middle", text: "Danse sans bouger les pieds." },
      { level: "big", text: "Crée une danse en 3 gestes et montre-la au groupe." },
      { level: "big", text: "Danse au ralenti comme dans un film magique." },
    ],
  },
  {
    name: "Vert",
    theme: "Animaux",
    color: "#43aa8b",
    intent: "Imitation, imagination et mouvement ludique.",
    challenges: [
      { level: "little", text: "Marche comme un petit pingouin." },
      { level: "little", text: "Étire-toi comme un chat qui se réveille." },
      { level: "middle", text: "Imite ton animal préféré sans parler." },
      { level: "middle", text: "Fais 6 pas de crabe, doucement." },
      { level: "big", text: "Fais deviner un animal rare en le mimant." },
      { level: "big", text: "Invente le cri d'un animal imaginaire." },
    ],
  },
  {
    name: "Orange",
    theme: "Mimes",
    color: "#f8961e",
    intent: "Expression corporelle sans obligation de parler.",
    challenges: [
      { level: "little", text: "Mime quelqu'un qui mange une soupe trop chaude." },
      { level: "little", text: "Mime une personne qui ouvre un gros cadeau." },
      { level: "middle", text: "Mime un astronaute qui marche sur la lune." },
      { level: "middle", text: "Mime un chef qui prépare une potion rigolote." },
      { level: "big", text: "Mime un métier et laisse les autres deviner." },
      { level: "big", text: "Mime une scène de sport au ralenti." },
    ],
  },
  {
    name: "Violet",
    theme: "Voix et visages",
    color: "#7b61ff",
    intent: "Jeu expressif sans se moquer de soi ou des autres.",
    challenges: [
      { level: "little", text: "Dis bonjour avec une voix de souris." },
      { level: "little", text: "Fais une tête très surprise pendant 3 secondes." },
      { level: "middle", text: "Dis 'mission réussie' avec une voix de robot." },
      { level: "middle", text: "Fais une grimace rigolote, seulement si tu en as envie." },
      { level: "big", text: "Raconte une phrase avec une voix de monstre gentil." },
      { level: "big", text: "Change de voix 3 fois en disant 'la roue a parlé'." },
    ],
  },
  {
    name: "Rose",
    theme: "Créativité",
    color: "#ff70a6",
    intent: "Imaginaire, confiance et choix personnel.",
    challenges: [
      { level: "little", text: "Prends une pose de super-héros." },
      { level: "little", text: "Montre une statue de joie." },
      { level: "middle", text: "Invente un nom de planète rigolo." },
      { level: "middle", text: "Mime un sort magique qui rend tout le monde gentil." },
      { level: "big", text: "Inventez à deux un cri d'équipe en 5 secondes." },
      { level: "big", text: "Crée une pose finale de groupe et choisis le nom de l'équipe." },
    ],
  },
  {
    name: "Turquoise",
    theme: "Calme et lien",
    color: "#4cc9f0",
    intent: "Retour au calme, respiration et convivialité.",
    challenges: [
      { level: "little", text: "Respire comme si tu sentais une fleur, puis soufflais une bougie." },
      { level: "little", text: "Fais une statue calme pendant 5 secondes." },
      { level: "middle", text: "Dis bravo à quelqu'un pour son dernier gage." },
      { level: "middle", text: "Compte doucement de 5 à 1 avec les mains ouvertes." },
      { level: "big", text: "Propose une variante plus facile du gage précédent." },
      { level: "big", text: "Fais respirer le groupe 3 fois comme si on gonflait un ballon." },
    ],
  },
];

const levelOrder = ["little", "middle", "big"];
const wheel = document.querySelector("#wheel");
const spinButton = document.querySelector("#spin-button");
const skipButton = document.querySelector("#skip-button");
const easierButton = document.querySelector("#easier-button");
const harderButton = document.querySelector("#harder-button");
const levelSelect = document.querySelector("#level-select");
const colorName = document.querySelector("#color-name");
const challengeText = document.querySelector("#challenge-text");
const challengeNote = document.querySelector("#challenge-note");
const legend = document.querySelector("#legend");

const segmentAngle = 360 / segments.length;
let currentRotation = 0;
let lastChallengeByColor = new Map();
let currentSegment = null;
let currentChallenge = null;
let isSpinning = false;

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function getAllowedLevels(preferredLevel) {
  const preferredIndex = levelOrder.indexOf(preferredLevel);

  if (preferredIndex === 0) {
    return ["little"];
  }

  if (preferredIndex === 1) {
    return ["little", "middle"];
  }

  return ["middle", "big"];
}

function getChallenge(segment, preferredLevel = levelSelect.value) {
  const allowedLevels = getAllowedLevels(preferredLevel);
  const pool = segment.challenges.filter((challenge) => allowedLevels.includes(challenge.level));
  const previous = lastChallengeByColor.get(`${segment.name}-${preferredLevel}`);
  let next = pool[randomInt(pool.length)];

  if (pool.length > 1) {
    while (next.text === previous) {
      next = pool[randomInt(pool.length)];
    }
  }

  lastChallengeByColor.set(`${segment.name}-${preferredLevel}`, next.text);
  return next;
}

function showChallenge(segment, challenge) {
  currentSegment = segment;
  currentChallenge = challenge;
  colorName.textContent = `${segment.name} : ${segment.theme}`;
  colorName.style.color = segment.color;
  challengeText.textContent = challenge.text;
  challengeNote.textContent = `${levels[challenge.level].ages} - ${levels[challenge.level].note}`;
}

function adaptChallenge(direction) {
  if (!currentSegment || isSpinning) {
    return;
  }

  const currentIndex = currentChallenge ? levelOrder.indexOf(currentChallenge.level) : 1;
  const nextIndex =
    direction === "easier"
      ? Math.max(0, currentIndex - 1)
      : Math.min(levelOrder.length - 1, currentIndex + 1);
  const nextLevel = levelOrder[nextIndex];
  const nextChallenge = getChallenge(currentSegment, nextLevel);

  showChallenge(currentSegment, nextChallenge);
}

function skipChallenge() {
  if (!currentSegment || isSpinning) {
    colorName.textContent = "On respecte le rythme";
    colorName.style.color = "#253047";
    challengeText.textContent = "Tu peux passer ton tour. Ici, personne n'est obligé.";
    challengeNote.textContent = "Le plaisir de jouer compte plus que le gage.";
    return;
  }

  const nextChallenge = getChallenge(currentSegment);
  showChallenge(currentSegment, nextChallenge);
}

function renderLegend() {
  legend.innerHTML = segments
    .map(
      (segment) => `
        <article class="legend-item">
          <span class="swatch" style="background: ${segment.color}"></span>
          <span>
            <strong>${segment.name} : ${segment.theme}</strong>
            <small>${segment.intent}</small>
          </span>
        </article>
      `,
    )
    .join("");
}

function setControlsDisabled(disabled) {
  wheel.disabled = disabled;
  spinButton.disabled = disabled;
  skipButton.disabled = disabled;
  easierButton.disabled = disabled;
  harderButton.disabled = disabled;
  levelSelect.disabled = disabled;
}

function spinWheel() {
  if (isSpinning) {
    return;
  }

  isSpinning = true;
  setControlsDisabled(true);
  colorName.textContent = "Ça tourne...";
  colorName.style.color = "#253047";
  challengeText.textContent = "La roue cherche un gage amusant et adapté.";
  challengeNote.textContent = "Petit suspense, grand sourire.";

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
    showChallenge(selectedSegment, getChallenge(selectedSegment));
    isSpinning = false;
    setControlsDisabled(false);
  }, 4500);
}

renderLegend();
wheel.addEventListener("click", spinWheel);
spinButton.addEventListener("click", spinWheel);
skipButton.addEventListener("click", skipChallenge);
easierButton.addEventListener("click", () => adaptChallenge("easier"));
harderButton.addEventListener("click", () => adaptChallenge("harder"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // Le jeu reste utilisable même si le mode offline n'est pas disponible.
    });
  });
}
