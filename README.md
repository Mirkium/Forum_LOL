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

## Prérequis pour faire fonctionner le Projet 
Les codes suivants : ejs , css , javascript : installé sur votre machine
MySQL installé 
npm install express ejs mysql express-session = express-session : Un middleware pour gérer les sessions
npm install express-session


## Installation requises :  Installation des dépendances :
Installer les dépendances npm dans le dossier API puis dans le dossier site.
- node -v
- npm -v
- npm init
- npm install express
- (npm i express)
- npm i supervisor --save-dev
- npm i cors

## Instructions :
Lancer l'api dans le dossier API puis lancer le site dans le dossier site.

## Configuration de la base de données :
Créez une base de données MySQL :
Code inclus directement dans le code (db)

## Configuration de l'application :

### Les Routes
Routes pour les Vues :
- Page d'accueil : GET /
- Inscription : GET /signup
- Connexion : GET /login
- Profil utilisateur : GET /profile/:id
- Liste des topics : GET /topics
- Voir un topic : GET /topic/:id
- Routes pour le Traitement de Données
- Inscription : POST /signup
- Connexion : POST /login
- Création de topic : POST /topic
- Envoi de message : POST /topic/:id/message
- Like/Dislike message : POST /message/:id/like POST /message/:id/dislike
- Recherche : GET /search

## Le projet a été décomposé en plusieurs phases :

Phase de Planification : Définition des fonctionnalités et de l'architecture.
Phase de Développement : Implémentation des fonctionnalités de base.
Phase de Test : Test des fonctionnalités et correction des bugs.
Phase de Documentation : Rédaction de la documentation et préparation de l'oral.

## Conclusion

L'architecture du projet, basée sur les languages suivants : HTML , css , ejs , javascript et MySQL, garantit une performance et une scalabilité optimales, tout en facilitant les futures extensions et améliorations.

Nous tenons à remercier tous les membres de l'équipe pour leur dévouement et leur travail acharné. Ce projet a renforcé notre capacité à collaborer efficacement, à gérer notre temps, et à produire un travail de qualité sous des délais serrés.

Nous espérons que ce forum pourra servir de base à des développements futurs et inspirer d'autres projets similaires. Merci à tous ceux qui ont soutenu et contribué à la réalisation de ce projet.
