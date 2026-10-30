# Projet 001 : Générateur de QR Code avec Express.js

Ce projet est une application web simple développée avec **Node.js**, **Express.js** et le module **qrcode**. Elle permet à l'utilisateur de saisir l'URL d'un site web via un formulaire et de générer instantanément le QR Code correspondant.

---

## 🛠️ Étapes de réalisation

1. **Initialisation du projet :**
   Création du dossier et initialisation de Node.js avec la commande :
   bash
   npm init -y
2. **Installation des dépendances :**
   Installation du serveur web Express et du générateur de QR code avec la commande :
   bash
   npm install express qrcode
3. **Création du code (`server.js`) :**
   - Création du fichier `server.js` à la racine du projet.
   - Ajout du code source avec Express pour afficher le formulaire HTML (`GET /`) et traiter la génération du QR Code (`POST /genererqr`).

4. **Lancement de l'application :**
   Démarrage du serveur avec la commande dans le terminal :
   bash
   node server.js

---

## 🎉 Résultat final
Une fois le serveur lancé et l'adresse `http://localhost:3000` ouverte dans le navigateur, l'application permet de saisir n'importe quelle URL pour générer instantanément son QR Code et le télécharger au format image.