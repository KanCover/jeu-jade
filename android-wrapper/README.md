# Jade Gages Android Wrapper

Mini application Android qui affiche le jeu publié sur GitHub Pages dans une
WebView. C'est plus fiable qu'une PWA pour Samsung Kids, car Samsung Kids liste
normalement les vraies applications Android installées.

## Construire l'APK avec Android Studio

1. Ouvrir Android Studio.
2. `File` > `Open` > choisir le dossier `android-wrapper`.
3. Laisser Android Studio synchroniser Gradle.
4. Brancher le téléphone ou la tablette Samsung.
5. Cliquer sur `Run` pour installer l'app de test.

## Générer un APK installable

Dans Android Studio :

1. `Build` > `Build Bundle(s) / APK(s)` > `Build APK(s)`.
2. Récupérer l'APK indiqué par Android Studio.
3. Installer l'APK sur l'appareil Samsung depuis le profil parent.
4. Ouvrir Samsung Kids.
5. `Plus d'options` > `Ajouter et modifier les applications`.
6. Ajouter `Jade Gages`.

APK debug déjà généré localement :

```text
android-wrapper/app/build/outputs/apk/debug/app-debug.apk
```

Build en ligne de commande sur cette machine :

```bash
cd android-wrapper
JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home" \
  /Users/saadkandil/.gradle/wrapper/dists/gradle-8.14-all/c2qonpi39x1mddn7hk5gh9iqj/gradle-8.14/bin/gradle assembleDebug
```

## Notes

- L'app charge `https://kancover.github.io/jeu-jade/`.
- Les mises à jour du jeu web sont donc visibles sans reconstruire l'APK.
- Si l'app doit fonctionner sans internet, il faudra créer une variante offline
  qui embarque les fichiers HTML/CSS/JS dans `android_asset`.
