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
      { level: "little", text: "Marche comme si tu traversais une flaque magique." },
      { level: "little", text: "Fais rouler tes épaules comme un petit train." },
      { level: "little", text: "Monte les bras très haut puis cache-les derrière ton dos." },
      { level: "little", text: "Fais 4 pas de dinosaure très lourds." },
      { level: "middle", text: "Fais 8 sauts étoile, ou 4 si tu préfères." },
      { level: "middle", text: "Cours sur place pendant 10 secondes." },
      { level: "middle", text: "Fais 6 pas chassés d'un côté puis de l'autre." },
      { level: "middle", text: "Fais semblant de sauter à la corde pendant 12 secondes." },
      { level: "middle", text: "Fais 5 squats de super-héros, tranquillement." },
      { level: "middle", text: "Traverse la pièce en marchant comme un ninja silencieux." },
      { level: "big", text: "Fais 12 montées de genoux en gardant le sourire." },
      { level: "big", text: "Invente un mini échauffement de champion en 3 mouvements." },
      { level: "big", text: "Fais 10 secondes de shadow boxing tout doux, sans toucher personne." },
      { level: "big", text: "Crée un parcours invisible : saute, contourne, rampe, puis pose finale." },
      { level: "big", text: "Fais 4 fentes de chevalier, deux de chaque côté." },
      { level: "big", text: "Mène le groupe dans 3 mouvements sportifs faciles." },
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
      { level: "little", text: "Pose une main sur la tête et avance de 2 petits pas." },
      { level: "little", text: "Fais la statue de l'arbre avec les deux pieds au sol." },
      { level: "little", text: "Marche talon-pointe sur 3 pas, doucement." },
      { level: "little", text: "Fais une pose de flamant rose avec quelqu'un à côté pour aider." },
      { level: "middle", text: "Fais l'avion avec les bras pendant 8 secondes." },
      { level: "middle", text: "Avance de 5 pas très lents sans te presser." },
      { level: "middle", text: "Tiens une pose de yoga du guerrier pendant 6 secondes." },
      { level: "middle", text: "Tourne doucement sur toi-même puis retrouve ton équilibre." },
      { level: "middle", text: "Marche comme un funambule sur une ligne imaginaire." },
      { level: "middle", text: "Fais une pose de surf et compte jusqu'à 6." },
      { level: "big", text: "Tiens sur un pied et compte jusqu'à 10." },
      { level: "big", text: "Fais 4 pas en arrière très doucement, puis une pose finale." },
      { level: "big", text: "Tiens la pose de l'arbre pendant 10 secondes, bras au choix." },
      { level: "big", text: "Fais un slalom imaginaire en 8 pas très contrôlés." },
      { level: "big", text: "Pose un objet léger sur ta tête et fais 5 pas." },
      { level: "big", text: "Crée une pose d'équilibre et donne-lui un nom." },
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
      { level: "little", text: "Danse comme une goutte de pluie qui tombe doucement." },
      { level: "little", text: "Fais bouger seulement tes épaules." },
      { level: "little", text: "Fais une danse de doudou fatigué." },
      { level: "little", text: "Tape dans tes mains 4 fois puis fais une pose." },
      { level: "middle", text: "Invente une danse de robot pendant 10 secondes." },
      { level: "middle", text: "Danse sans bouger les pieds." },
      { level: "middle", text: "Fais une mini danse africaine imaginaire avec beaucoup de rythme." },
      { level: "middle", text: "Fais une danse de statue : bouge, stop, bouge, stop." },
      { level: "middle", text: "Fais une vague avec les bras comme dans une fête." },
      { level: "middle", text: "Copie les 3 gestes de danse d'un autre joueur." },
      { level: "big", text: "Crée une danse en 3 gestes et montre-la au groupe." },
      { level: "big", text: "Danse au ralenti comme dans un film magique." },
      { level: "big", text: "Lance un battle amical : chacun ajoute un geste, sans gagnant." },
      { level: "big", text: "Fais une chorégraphie de 4 temps : haut, bas, côté, pose." },
      { level: "big", text: "Danse comme si le sol était en trampoline." },
      { level: "big", text: "Guide le groupe dans une danse miroir pendant 10 secondes." },
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
      { level: "little", text: "Fais le petit lapin avec 3 bonds doux." },
      { level: "little", text: "Avance comme une tortue très lente." },
      { level: "little", text: "Ouvre grand les bras comme un oiseau." },
      { level: "little", text: "Fais le poisson qui nage avec les mains." },
      { level: "middle", text: "Imite ton animal préféré sans parler." },
      { level: "middle", text: "Fais 6 pas de crabe, doucement." },
      { level: "middle", text: "Fais l'ours qui marche avec de grands pas." },
      { level: "middle", text: "Saute comme un kangourou pendant 8 secondes." },
      { level: "middle", text: "Mime un serpent qui se faufile sans aller au sol." },
      { level: "middle", text: "Fais deviner un animal de la jungle." },
      { level: "big", text: "Fais deviner un animal rare en le mimant." },
      { level: "big", text: "Invente le cri d'un animal imaginaire." },
      { level: "big", text: "Combine deux animaux et mime la nouvelle créature." },
      { level: "big", text: "Fais le guide d'un safari imaginaire pendant 10 secondes." },
      { level: "big", text: "Mime un animal qui découvre une musique bizarre." },
      { level: "big", text: "Crée une parade d'animal royal avec une marche spéciale." },
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
      { level: "little", text: "Mime que tu portes un ballon très léger." },
      { level: "little", text: "Mime que tu brosses les dents d'un dragon gentil." },
      { level: "little", text: "Mime que tu enfiles des bottes énormes." },
      { level: "little", text: "Mime que tu tiens un parapluie dans le vent." },
      { level: "middle", text: "Mime un astronaute qui marche sur la lune." },
      { level: "middle", text: "Mime un chef qui prépare une potion rigolote." },
      { level: "middle", text: "Mime que tu cherches un trésor invisible." },
      { level: "middle", text: "Mime un magicien qui rate son tour puis réussit." },
      { level: "middle", text: "Mime une personne qui glisse sur une banane imaginaire, sans tomber." },
      { level: "middle", text: "Mime une statue de musée qui se réveille." },
      { level: "big", text: "Mime un métier et laisse les autres deviner." },
      { level: "big", text: "Mime une scène de sport au ralenti." },
      { level: "big", text: "Mime une publicité pour des chaussures qui font rebondir." },
      { level: "big", text: "Mime un personnage de jeu vidéo qui change de niveau." },
      { level: "big", text: "Mime une émotion sans parler : joie, surprise ou fierté." },
      { level: "big", text: "Mime une mini histoire en 3 étapes : départ, problème, victoire." },
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
      { level: "little", text: "Dis 'coucou' avec une voix de géant gentil." },
      { level: "little", text: "Fais une tête de poisson pendant 2 secondes." },
      { level: "little", text: "Fais semblant de rire comme une petite fusée." },
      { level: "little", text: "Dis ton prénom comme un robot tout doux." },
      { level: "middle", text: "Dis 'mission réussie' avec une voix de robot." },
      { level: "middle", text: "Fais une grimace rigolote, seulement si tu en as envie." },
      { level: "middle", text: "Dis 'la roue est magique' avec une voix de pirate." },
      { level: "middle", text: "Fais 3 visages : content, étonné, concentré." },
      { level: "middle", text: "Répète une phrase avec une voix très lente puis très rapide." },
      { level: "middle", text: "Fais le bruit d'une machine inventée." },
      { level: "big", text: "Raconte une phrase avec une voix de monstre gentil." },
      { level: "big", text: "Change de voix 3 fois en disant 'la roue a parlé'." },
      { level: "big", text: "Présente la météo d'une planète imaginaire." },
      { level: "big", text: "Fais une mini annonce de stade pour féliciter le groupe." },
      { level: "big", text: "Dis une phrase normale avec une émotion choisie par le groupe." },
      { level: "big", text: "Invente un slogan pour l'équipe de Jade." },
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
      { level: "little", text: "Dessine un cercle dans l'air avec ton doigt magique." },
      { level: "little", text: "Montre comment dort une étoile." },
      { level: "little", text: "Choisis une couleur et fais une pose qui lui ressemble." },
      { level: "little", text: "Invente un mini salut royal." },
      { level: "middle", text: "Invente un nom de planète rigolo." },
      { level: "middle", text: "Mime un sort magique qui rend tout le monde gentil." },
      { level: "middle", text: "Crée une machine invisible avec 3 gestes." },
      { level: "middle", text: "Invente un cri de victoire tout doux." },
      { level: "middle", text: "Fais une sculpture avec ton corps : pont, étoile ou montagne." },
      { level: "middle", text: "Imagine un animal magique et montre comment il avance." },
      { level: "big", text: "Inventez à deux un cri d'équipe en 5 secondes." },
      { level: "big", text: "Crée une pose finale de groupe et choisis le nom de l'équipe." },
      { level: "big", text: "Invente une règle bonus amusante pour le prochain tour." },
      { level: "big", text: "Compose une mini scène de théâtre de 10 secondes avec un ami." },
      { level: "big", text: "Crée un sort de protection pour que tout le monde joue en sécurité." },
      { level: "big", text: "Donne un nom à la roue et présente-la comme une star." },
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
      { level: "little", text: "Fais un câlin papillon avec tes bras autour de toi." },
      { level: "little", text: "Chuchote 'bravo' à la roue." },
      { level: "little", text: "Fais 3 respirations de dragon gentil." },
      { level: "little", text: "Montre un sourire de champion tranquille." },
      { level: "middle", text: "Dis bravo à quelqu'un pour son dernier gage." },
      { level: "middle", text: "Compte doucement de 5 à 1 avec les mains ouvertes." },
      { level: "middle", text: "Fais un high-five imaginaire à tout le groupe." },
      { level: "middle", text: "Choisis quelqu'un et inventez une poignée de main de 3 gestes." },
      { level: "middle", text: "Fais écouter 5 secondes de silence magique." },
      { level: "middle", text: "Dis une chose que tu as aimée dans le jeu." },
      { level: "big", text: "Propose une variante plus facile du gage précédent." },
      { level: "big", text: "Fais respirer le groupe 3 fois comme si on gonflait un ballon." },
      { level: "big", text: "Crée un mini rituel de félicitations pour le prochain joueur." },
      { level: "big", text: "Trouve une façon d'aider un plus petit à réussir son gage." },
      { level: "big", text: "Lance un défi duo coopératif : réussir ensemble, sans gagnant." },
      { level: "big", text: "Propose une idée de nouveau gage pour Jade." },
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
