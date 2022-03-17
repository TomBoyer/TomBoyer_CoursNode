const express = require("express");
const app = express();

//midleware 1
app.use((req, res, next) => {
  console.log("1/ ok requête reçue dans la console!");
  next();
});

//midleware 2
app.use((req, res, next) => {
  res.status(201);
  next();
});

//midleware 3
app.use((req, res, next) => {
  res.json({ message: "2/ requête bien reçue sur posteman !" });
  next();
});

app.use((req, res) => {
    console.log('3/ réponse envoyée avec succès dans la console');
});

//exporter l'appli express pour l'utiliser depuis le serveur
module.exports = app;
