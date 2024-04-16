# Fondations Angular

Ce dépôt est constitué d'un cours et de travaux pratiques pour l'apprentissage du _framework_ [Angular](https://angular.io/).

Les détails sont disponibles dans la [documentation](https://formations.github.io/angular-foundations/).

Voici la version complète du fichier README avec des commentaires en français :

# Mon Projet Angular

Ce dépôt contient un projet Angular fantastique.

## Installation

Pour commencer, suivez ces étapes :

1. Supprimez le dossier `node_modules` et le fichier `package-lock.json` :

   ```bash
   rm -rf node_modules package-lock.json
   ```

   <!-- Cette ligne supprime le dossier `node_modules` et le fichier `package-lock.json` pour s'assurer que nous avons une installation propre des dépendances lors de la réinstallation. -->

2. Installez Angular CLI globalement :

   ```bash
   npm install -g @angular/cli
   ```

   <!-- Cette ligne installe Angular CLI globalement sur votre machine, ce qui vous permet d'utiliser la commande `ng` n'importe où dans votre système. -->

3. Installez les dépendances du projet :
   ```bash
   npm install
   ```
   <!-- Cette ligne installe les dépendances du projet définies dans le fichier `package.json`. -->

Ajouter a ligne `"start": "node --openssl-legacy-provider ./node_modules/@angular/cli/bin/ng serve"`, dans le fichier package.json définit un script nommé "start" qui est utilisé pour démarrer le serveur de développement Angular.

## Utilisation

Pour démarrer le serveur de développement, utilisez la commande suivante :

```bash
npm start
```

   <!-- Cette ligne utilise le script `start` défini dans le fichier `package.json` pour démarrer le serveur de développement Angular. Le drapeau `--openssl-legacy-provider` est inclus pour résoudre les problèmes de compatibilité avec OpenSSL dans les versions récentes de Node.js. -->

## Résolution de Problèmes

Si vous rencontrez des problèmes avec RxJS, vous pouvez essayer de réinstaller la dernière version :

```bash
npm install rxjs@latest
```

   <!-- Cette ligne réinstalle la dernière version de RxJS pour s'assurer que nous avons la version la plus récente du package. -->
