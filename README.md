This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## DEMARRAGE DU PROJET

- using SSH : git clone git@github.com:OlivierCadoz/test-lbc.git
- using https : git clone https://github.com/OlivierCadoz/test-lbc.git

- npm install / yarn

- npm run start / yarn start

- Url local du projet : http://localhost:3000/

## LANCER LES TESTS
(Aucuns tests n'a été ajoutés pour le moment)

- npm run test / yarn test

## DIRECTIVE DU PROJET

Il s'agit de développer une interface capable de lister des messages.
Elle permettra également de remplir un message pour le poster.
Un message est composé d'un texte et d'un champ précisant s'il est privé ou public.
L'approche doit être API centrique, mais il n'est pas nécessaire de développer les API pour le test.
Des données statiques seront suffisantes pour peupler les pages.
Votre développement doit pouvoir être repris facilement par un autre membre de l'équipe, il doit disposer de tous les éléments pour comprendre votre travail facilement.
Vous devez prendre les meilleures dispositions pour garantir la qualité et le fonctionnement de votre livrable.
Merci de nous déposer le code sur un repository de votre choix qui soit accessible afin que nous puissions le regarder.

Vous êtes également invités à prendre le temps de soigner un minimum l'interface, faire des tests unitaire, ainsi qu'ajouter un README clair nous permettant facilement de faire tourner le projet. Toute autre initiative personnelle est généralement la bienvenue, même si cela reste optionnel.

## PARTI PRIS

Pour répondre aux attentes du projet j'ai choisi d'utiliser create-react-app
pour gagner du temps sur la configuration du projet, et pour assurer sa solidité
et la qualité du code j'ai ajouté **typescript**, **eslint** et **prettier**.

L'application développée est donc en **React**/**Redux**, des actions et des reducers
divisés en deux pour les utilisateurs et pour les différents chats.

Toute la donnée traitée est statique, on peut saisir du text mais l'application
se basant sur la connexion fictive de l'utilisateur *0*, il n'y a pas de réponse possible.

## FONTIONNALITE QUE JE SOUHAITAIS DEVELOPPER SI LE TEMPS ME LE PERMETTAIT

- Un serveur NodeJS qui m'aurait permis de gérer les authentifications des utilisateurs
  et d'avoir une vraie api pour l'application.
- Le responsive en mobile, le design choisit est flexible jusqu'à 768px, mais le challenge
  que je me suis imposé m'aurait demandé plus de temps.
- Gérer le nombre de discussion privée selon la largeur d'écran
- Modifier/Supprimer des éléments.
- Ajouter la date de publication des messages
- Fusionner les messages qui se suivent écrits par le même utilisateur
- Un profil utilisateur
- Ajouter des tests 

