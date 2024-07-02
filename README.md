### Projet de Forum
## Introduction
Ce projet vise à créer une plateforme de forum où les utilisateurs peuvent s'inscrire, se connecter, créer des discussions (topics), y répondre, et interagir avec d'autres utilisateurs. Le forum inclut des fonctionnalités de gestion avancée pour les administrateurs et des options de personnalisation pour les utilisateurs. Le projet est développé en utilisant ejs , css , javascript et MySQL pour le stockage des données.

### Fonctionnalités
## Utilisateurs
Inscription : Les utilisateurs peuvent s'inscrire en fournissant un nom d'utilisateur (lettres et chiffres uniquement), une adresse mail, et un mot de passe respectant les critères de sécurité.
Connexion : Les utilisateurs peuvent se connecter en utilisant leur nom d'utilisateur ou adresse mail et mot de passe.
Profil : Les utilisateurs peuvent configurer et modifier leur profil, qui inclut un nom d'utilisateur, une photo de profil, une biographie, la dernière connexion, le nombre de messages envoyés et le nombre de topics créés.
Amis : Les utilisateurs peuvent envoyer des demandes d'amis, accepter ou refuser des demandes, et consulter les topics privés de leurs amis.
Topics
Création : Les utilisateurs authentifiés peuvent créer des topics avec un titre, un corps, des tags, une date de création, un auteur et un état (ouvert, fermé, archivé, public, privé).
Gestion : Les propriétaires de topics peuvent modifier ou supprimer leurs topics, ainsi que supprimer des messages dans leurs topics.
Recherche : Les utilisateurs peuvent rechercher des topics par tag ou par titre.
Affichage : Les topics peuvent être listés en fonction de leurs tags et affichés par lot de 10, 20, 30 ou tous les éléments.
Messages
Envoi : Les utilisateurs authentifiés peuvent envoyer des messages dans les topics avec un auteur, un corps de texte, une date d'envoi et une image associée.
Like/Dislike : Les utilisateurs peuvent liker ou disliker des messages. Un utilisateur ne peut pas liker et disliker un message simultanément. Les messages peuvent être triés par popularité ou chronologiquement.

## Administration
Dashboard : Les administrateurs peuvent accéder à un tableau de bord pour administrer la plateforme, incluant la modification de l'état des topics, la suppression de topics, la suppression de messages, et le bannissement de comptes utilisateurs.
Installation et Lancement

## Prérequis pour faire fonctionnée le Projet 
Les codes suivants : Ejs , html , css , javascript : installé sur votre machine
MySQL installé 
npm install express ejs mysql express-session = express-session : Un middleware pour gérer les sessions

## Installation requises :  Installation des dépendances :
node -v
npm -v
npm init
npm install express
(npm i express)
npm i supervisor --save-dev
npm i cors

## Instructions
Clonez le dépôt :
git clone https: https://github.com/Mirkium/Forum_LOL
cd forum ....

## Configuration de la base de données :
Créez une base de données MySQL :
Code inclus directement dans le code (db)

## Configuration de l'application :

## Configurez les variables d'environnement dans un fichier .env :
env
DB_HOST=localhost
DB_USER=votre_utilisateur
DB_PASS=votre_mot_de_passe
DB_NAME=forum_db

### Les Routes
Routes pour les Vues :
Page d'accueil : GET /
Inscription : GET /signup
Connexion : GET /login
Profil utilisateur : GET /profile/:username
Liste des topics : GET /topics
Voir un topic : GET /topic/:id
Routes pour le Traitement de Données
Inscription : POST /signup
Connexion : POST /login
Création de topic : POST /topic
Envoi de message : POST /topic/:id/message
Like/Dislike message : POST /message/:id/like POST /message/:id/dislike
Recherche : GET /search

### Inscription et Connexion
Création et Gestion de Topics
Envoi de Messages et Interaction (Like/Dislike)
Fonctionnalités Administratives

### Synthèse du Déroulement du Projet
## Décomposition du Projet
## Le projet a été décomposé en plusieurs phases :

Phase de Planification : Définition des fonctionnalités et de l'architecture.
Phase de Développement : Implémentation des fonctionnalités de base.
Phase de Test : Test des fonctionnalités et correction des bugs.
Phase de Documentation : Rédaction de la documentation et préparation de l'oral.
Répartition des Tâches
Nom 1 : Inscription et Connexion des utilisateurs
Nom 2 : Gestion des Topics et Messages
Nom 3 : Mise en place de la base de données
Nom 4 : Tests et Assurance qualité

### Gestion du Temps
Planification Hebdomadaire : Réunions pour évaluer l'avancement et ajuster les priorités.
Définition des Priorités : Priorité donnée aux fonctionnalités critiques avant les fonctionnalités secondaires.
Stratégie de Documentation
Utilisation de Google Docs : Pour partager et collaborer sur la documentation en temps réel.
Rédaction Continue : Documenter chaque fonctionnalité au fur et à mesure de son implémentation.
Démonstration
Préparez une démonstration pour montrer le fonctionnement de la plateforme, en mettant l'accent sur les points suivants :

### Conclusion
Ce projet de forum a été une excellente opportunité pour notre équipe de mettre en pratique nos compétences en développement web et gestion de base de données. Nous avons conçu et implémenté une plateforme complète permettant aux utilisateurs de communiquer et d'interagir de manière structurée et sécurisée.

Le développement de ce forum nous a permis de relever plusieurs défis techniques, notamment en matière de gestion des utilisateurs, de sécurisation des données, et de gestion des contenus générés par les utilisateurs. En intégrant des fonctionnalités avancées telles que la gestion des likes/dislikes, les topics privés/publics, et un tableau de bord d'administration, nous avons réussi à créer une plateforme robuste et flexible.

L'architecture du projet, basée sur les languages suivants : HTML , css , ejs , javascript et MySQL, garantit une performance et une scalabilité optimales, tout en facilitant les futures extensions et améliorations.

Nous tenons à remercier tous les membres de l'équipe pour leur dévouement et leur travail acharné. Ce projet a renforcé notre capacité à collaborer efficacement, à gérer notre temps, et à produire un travail de qualité sous des délais serrés.

Nous espérons que ce forum pourra servir de base à des développements futurs et inspirer d'autres projets similaires. Merci à tous ceux qui ont soutenu et contribué à la réalisation de ce projet.
