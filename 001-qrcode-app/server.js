// Importation des modules
const express = require('express');
const qrcode = require('qrcode');

// Déclaration de l'application Express
const app = express();

// Middleware pour lire les données du formulaire
app.use(express.urlencoded({ extended: true }));

// Route 1 : Affiche le formulaire HTML pour saisir l'URL
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Générateur de QR Code</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 50px; text-align: center; background-color: #f4f4f9; }
                h1 { color: #333; }
                form { margin-top: 30px; background: white; padding: 30px; display: inline-block; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
                input[type="url"] { padding: 10px; width: 300px; font-size: 16px; border: 1px solid #ccc; border-radius: 4px; }
                button { padding: 10px 20px; font-size: 16px; cursor: pointer; background-color: #007bff; color: white; border: none; border-radius: 4px; margin-left: 10px; }
                button:hover { background-color: #0056b3; }
            </style>
        </head>
        <body>
            <h1>Générateur de QR Code</h1>
            <form action="/genererqr" method="POST">
                <input type="url" name="url" placeholder="Entrez une URL (ex: https://google.com)" required>
                <button type="submit">Générer</button>
            </form>
        </body>
        </html>
    `);
});

// Route 2 : Traite l'URL et affiche le QR Code généré
app.post('/genererqr', async (req, res) => {
    try {
        const urlSaisie = req.body.url;
        
        // Génération du QR Code en image Base64
        const qrimage = await qrcode.toDataURL(urlSaisie);

        res.send(`
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <title>QR Code Résultat</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 50px; text-align: center; background-color: #f4f4f9; }
                    img { border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: white; margin: 20px 0; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
                    a { display: inline-block; margin-top: 15px; color: #007bff; text-decoration: none; font-weight: bold; }
                    a:hover { text-decoration: underline; }
                </style>
            </head>
            <body>
                <h1>Votre QR Code est prêt !</h1>
                <p>Pour l'URL : <strong>${urlSaisie}</strong></p>
                <div>
                    <img src="${qrimage}" alt="QR Code">
                </div>
                <div>
                    <a href="${qrimage}" download="qrcode.png">⬇️ Télécharger l'image PNG</a>
                </div>
                <br><br>
                <a href="/">← Générer un autre QR Code</a>
            </body>
            </html>
        `);
    } catch (err) {
        res.status(500).send("Erreur lors de la génération : " + err.message);
    }
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
    console.log("🚀 Serveur démarré sur http://localhost:3000");
});