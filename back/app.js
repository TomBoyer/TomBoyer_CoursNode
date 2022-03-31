const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//importer le routeur pour récupérer les middleware/routes thing
const stuffRoutes = require("./routes/stuff");

//importer le router pour récupérer les middleware/routes user
const userRoutes = require("./routes/user");

//importer mongoose + connecter avec le userTest de mongoDB
const mongoose = require("mongoose");

//importer package node pour donner accès au chemin de système de fichiers
const path = require("path");

mongoose
  .connect(
    "mongodb+srv://testmongodb:F0Typa2A5NMlfPLN@test.myy8e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// //midleware 1
// app.use((req, res, next) => {
//   console.log("1/ ok requête reçue dans la console!");
//   next();
// });

// //midleware 2
// app.use((req, res, next) => {
//   res.status(201);
//   next();
// });

// //midleware 3
// app.use((req, res, next) => {
//   res.json({ message: "2/ requête bien reçue sur posteman !" });
//   next();
// });

// app.use((req, res) => {
//     console.log('3/ réponse envoyée avec succès dans la console');
// });

//ajouter middleware pour intercépter les requetes avec un content type json et les mettre à dispo dans req.body (pareil que bodyParser qui donne accès au corp de la requête)
app.use(express.json());

//ajouter middleware générale à notre appli pour permettre à l'app et au serv de communiquer. (eviter les CORS).
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//créer middleware pour répondre aux requêtes envoyées a /images
app.use("/images", express.static(path.join(__dirname, "images")));

//importer les routes avec le bon complément d'url en argument
app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);

//exporter l'appli express pour l'utiliser depuis le serveur
module.exports = app;

//compléter URL localhost 3000 en ajoutant 2 objets visibles, le .get permet d'intercepter les requêtes get
// app.get("/api/stuff", (req, res, next) => {
//exp :
// const stuff = [
//   {
//     _id: "oeihfzeoi",
//     title: "Mon premier objet",
//     description: "Les infos de mon premier objet",
//     imageUrl:
//       "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
//     price: 4900,
//     userId: "qsomihvqios",
//   },
//   {
//     _id: "oeihfzeomoihi",
//     title: "Mon deuxième objet",
//     description: "Les infos de mon deuxième objet",
//     imageUrl:
//       "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
//     price: 2900,
//     userId: "qsomihvqios",
//   },
// ];
// res.status(200).json(stuff);
// });
