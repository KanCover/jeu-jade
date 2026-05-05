# Roue des Gages

Prototype local d'un jeu développé par Jade pour les enfants de 3 à 10 ans.
Le jeu va évoluer avec de nouveaux gages, et les suggestions sont les bienvenues
pour l'enrichir.

## Lancer le jeu

Ouvre `index.html` dans un navigateur, ou lance un serveur local simple :

```bash
python3 -m http.server 8000
```

Puis va sur `http://localhost:8000`.

## Publier au plus simple

Le jeu est une application statique : il suffit de publier ce dossier sur un
hébergeur statique comme GitHub Pages, Netlify ou Vercel.

Option la plus simple sans configuration serveur :

1. Créer un dépôt GitHub `KanCover/jeu-jade`.
2. Envoyer les fichiers du projet dans ce dépôt.
3. Activer GitHub Pages sur la branche principale.

URL publique attendue :

```text
https://kancover.github.io/jeu-jade/
```

Les suggestions peuvent être envoyées via les Issues GitHub :

```text
https://github.com/KanCover/jeu-jade/issues/new
```

Le jeu peut aussi fonctionner hors ligne après une première visite grâce au
fichier `sw.js`.

## Modifier les gages

Les couleurs, thèmes et gages sont dans `app.js`, dans le tableau `segments`.

## Bonnes pratiques intégrées

Le jeu applique quelques règles simples pour rester agréable aux enfants :

- Défis courts, simples et adaptables.
- Aucun gage humiliant ou intrusif.
- Possibilité de passer son tour.
- Boutons pour proposer un gage plus facile ou plus dur.
- Niveaux d'âge : 3-5 ans, 6-7 ans, 8-10 ans.
- Mélange de motricité globale, équilibre, coordination, créativité et calme.
- Défis coopératifs et bienveillants plutôt que compétitifs.
- Activités inspirées de jeux de cour, théâtre, mime, danse, yoga enfant,
  rythme, coopération et retour au calme.
