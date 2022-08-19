# Projet 7 : créer un réseau social d'entreprise


# Installation du Projet
## Pré-requis :
- <a href="https://nodejs.org/en/download/">Node.js installé</a> (v16.14.0)
- <a href="https://nodejs.org/en/download/">npm installé</a> (v8.3.1)
- <a href="https://dev.mysql.com/downloads/installer/">MySQL installé</a>

## Etapes :
- Clonez ce repo ;
- Exécutez le script SQL qui se situe dans le dossier bdd/groupomania.sql ;
- <b>Back-end</b> : allez dans le dossier backend/config et mettre la config de votre BDD <br>
-> allez dans le dossier backend et exécutez la commande npm install puis npm run start ;
- <b>Front-end</b> : allez dans le dossier frontend/groupomania puis exécutez la commande npm install et enfin npm run serve ;


# Contexte :
Ce projet consiste à construire un réseau social interne pour les employés de GROUPOMANIA.
Une première version est attendue.
Le but : faciliter les interactions entre les collègues.
Le département RH de GROUPOMANIA a imaginé plusieurs fonctionnalités pour favoriser les échanges entre collègues.

## Résumé de la mission :
- Aspect graphique libre, avec respect de l'identité de l'entreprise avec utilisation des couleurs et de la police indiquées ;
- Responsive

## Spécifications fonctionnelles :
- <b>Page de connexion</b> : permet à l'utilisateur de se connecter ou de créer un compte si il n'en possède pas ;
- <b>Détails de fonctionnalités de "connexion"</b> : <br>
-> Déconnexion possible de l'utilisateur,<br>
-> Session utilisateur persiste pendant qu'il est connecté,<br>
-> Données de connexion sécurisées ;
- <b>Page d'accueil</b> : cette page liste les posts créés par les différents utilisateurs, du post le plus récent au plus ancien ;
- <b>Création d'un post</b> : <br>
-> Un utilisateur doit pouvoir créer un post, <br>
-> Le post doit pouvoir contenir texte et/ou image,<br>
-> L'utilisateur doit pouvoir modifer ou supprimer son post;
- <b>Système de like</b> : un utilisateur doit pouvoir liker un post, une seule fois ;
- <b>Administrateur</b> : pour la modération, droits de modification/suppression sur tous les posts du réseau social ;
## Technique :
- Mise en place du front-end, du back-end et de la base de données ;
- Projet codé en JavaScript avec respect des standards WCAG ;
- Utilisation d'un framework front-end obligatoire : j'ai choisi VueJS ;
- Pour la BDD : soit du NoSQL (MongoDB) soit SQL avec aide d'un ORM si souhaité <br> -> J'ai choisi d'utiliser SQL avec MySQL et Sequelize en ORM ;
